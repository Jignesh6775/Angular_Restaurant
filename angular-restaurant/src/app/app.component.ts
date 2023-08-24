import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Make sure the path is correct


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {} // Add this constructor
}