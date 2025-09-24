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
export class Dashboard implements OnInit{

  constructor(public router: Router) { }

  presentUser = "";
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      const decoded = jwtDecode<JwtPayload>(token);
      this.presentUser = decoded.first_name;
      console.log(decoded);
    }
  }
  logout(){
 localStorage.removeItem('token');
  this.router.navigate(['/login']);
  }

}
