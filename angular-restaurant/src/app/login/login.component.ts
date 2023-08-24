import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(
    private http: HttpClient, 
    private authService: AuthService,
    private router: Router) {}

    login() {
      const credentials = {
        username: this.username,
        password: this.password
      };
    
      this.http.get<any[]>('http://localhost:3000/users', { params: { username: credentials.username, password: credentials.password } })
        .subscribe(users => {
          if (users.length === 1) {
            console.log('Login successful:', users[0]);
            this.authService.login(); // Update the authentication state
            this.router.navigate(['/restaurant']); // Navigate to the restaurant homepage
          } else {
            console.log('Login failed. Invalid credentials.');
            this.loginFailed = true;
          }
        }, error => {
          console.error('An error occurred:', error);
          this.loginFailed = true;
        });
    }
    
  
}
