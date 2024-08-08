import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';
// Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  //constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
   /*this.authService.register(this.name, this.email, this.password).subscribe(
      response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al registrar', error);
      }
    );*/
  }

  navigateTo(path: string): void {
    //this.router.navigate([path]);
  }
}

