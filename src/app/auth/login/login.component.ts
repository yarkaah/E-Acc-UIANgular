import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role); // Store role for routing and role guards

        // Role-based redirect
        if (res.role === 'INSTITUTION') {
          this.router.navigate(['/institution-dashboard']);
        } else {
          this.router.navigate(['/home']); // or '/documents'
        }
      },
      error: () => {
        this.error = 'Invalid email or password';
      }
    });
  }
}
