import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  username: string='';
  password: string='';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
      
    const url = 'http://localhost:8080/login';
    const data = { username: this.username, password: this.password };
    console.log(this.myForm.get("name")?.value+" "+this.myForm.get("password")?.value);
    data.username="raguram";
      if (this.myForm.get('name')?.value=='raguram') {
        // Navigate to success page
        this.router.navigate(['/dashboard']);
      } else {
        // Navigate to failure page
        this.router.navigate(['/failure']);
      }
   
  }

}
