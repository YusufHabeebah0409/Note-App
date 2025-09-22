import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public builder = inject(FormBuilder);

  constructor(private _http: HttpClient, public router: Router) { }
  error = "";

  signinForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
  })
  signIn() {
    this._http.post('http://localhost/my-project-php/august-php/frontendlogin.php', this.signinForm.value).subscribe((response: any) => {
      console.log(response);
      if (response.status) {
        this.router.navigate(['/'])
        
      } else {
        this.error = response.message;
      }


    }
    )


  }
}
