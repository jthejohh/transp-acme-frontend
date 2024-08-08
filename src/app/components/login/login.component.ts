import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    
   // if (this.email && this.password) {
      this.router.navigate(['/""']);
    }
  /*}*/

  navigateToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/registro']);
  }
}                            //ESTE ES EL CODIGO ORIGINAL, EL DE ARRIBA ES PROVICIONAL PARA PODER OBSERVAR EL RESTO DE LA APP


/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        }
      });
    } else {
      console.error('Email and password are required');
      this.errorMessage = 'Email and password are required.';
    }
  }

  navigateToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/registro']);
  }
}*/
