import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  user = { email: '', password: '', role: 'USER'};
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(){
    this.authService.register(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => this.error = 'Registration failed'
    });
  }

}
