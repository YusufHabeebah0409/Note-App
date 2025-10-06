import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';



interface JwtPayload {
  user_id: number;
  first_name: string;
  email: string;
  iat: number;
  exp: number;
  role: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  @ViewChild('postImage') postImageRef!: ElementRef

  constructor(public router: Router, private _http: HttpClient) { }

  faImage = faImage;

  presentUser = "";
  ngOnInit(): void {
    const token = localStorage['token'];
    // console.log(token);
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      this.presentUser = decoded.first_name;
      this._http.post('http://localhost/my-project-php/august-php/verifyToken.php', { token, user_id: decoded.user_id }).subscribe((res: any) => {

        if (!res.status) {
          this.router.navigate(['/login']);
        }
      })
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  handleClick() {
    console.log(this.postImageRef);
    this.postImageRef.nativeElement.click()
  }

  error = ""
  handleFileChange(event: any) {
    const acceptable = ['image/jpeg', 'image/png', 'image/jpg'];
    const file = event.target.files[0];
    if (acceptable.includes(file.type, 0)) {
      console.log("contains");

    } else {
      this.error = " File extension not supported"
    }
  }

}
