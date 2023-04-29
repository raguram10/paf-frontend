import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string='';
  password: string='';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url = 'http://localhost:8080/login';
    const data = { username: this.username, password: this.password };
    this.http.post(url, data).subscribe((response: any) => {
      console.log(response.success)
      if (response.success) {
        // Navigate to success page
        this.router.navigate(['/success']);
      } else {
        // Navigate to failure page
        this.router.navigate(['/failure']);
      }
    });
  }

}
