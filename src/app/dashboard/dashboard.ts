import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  constructor(public router: Router, private _http: HttpClient) { }

  presentUser = "";
  ngOnInit(): void {
    const token = localStorage['token'];

    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      this.presentUser = decoded.first_name;
      this._http.post('http://localhost/my-project-php/august-php/verifyToken.php', { token, user_id: decoded.user_id }).subscribe((res:any) => {
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

}
