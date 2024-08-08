import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reporte',
  standalone: true,
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  imports: [CommonModule, RouterModule] 
  
})
export class ReporteComponent {
  ingresos = [
    { placa: 'ABC123', marca: 'Toyota', conductor: 'Juan Pérez', propietario: 'Pedro López' },
    { placa: 'XYZ789', marca: 'Ford', conductor: 'María Gómez', propietario: 'Ana García' }
   
  ];

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  toggleMenu() {
    
  }
}
