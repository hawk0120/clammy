// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, NgIf],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard on successful login
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
