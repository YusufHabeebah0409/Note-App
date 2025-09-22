import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule,RouterLink ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  public builder = inject(FormBuilder);

  constructor(private _http: HttpClient, public router: Router) { }

  signupForm = this.builder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  });


  register() {
    this._http.post('http://localhost/my-project-php/august-php/frontendreg.php', this.signupForm.value).subscribe((response: any) => {

      if (response.status) {
        this.router.navigate(['/login'])

      } else {
        alert('Something Went Wrong')
      }

    }
    )

  }

}
