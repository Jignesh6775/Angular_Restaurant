import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/users', newUser)
      .subscribe(response => {
        console.log('User registered:', response);
        alert(`${this.username} Registered Successfully`)
        // Clear form fields after successful registration
        this.username = '';
        this.email = '';
        this.password = '';
      });
  }
}
