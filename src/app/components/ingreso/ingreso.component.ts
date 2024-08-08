import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { VehiculoService } from '../../services/vehiculo.service';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class IngresoComponent {
  vehiculoForm: FormGroup;
  personaForm: FormGroup;
  menuVisible = false; // Estado del menú

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private personaService: PersonaService,
    private router: Router
  ) {
    this.vehiculoForm = this.fb.group({
      placa: [''],
      color: [''],
      marca: [''],
      tipo: [''],
      conductor_id: [''],
      propietario_id: ['']
    });

    this.personaForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      direccion: [''],
      telefono: [''],
      ciudad: ['']
    });
  }

  onSubmitVehiculo(): void {
    this.vehiculoService.createVehiculo(this.vehiculoForm.value).subscribe({
      next: (response) => console.log('Vehículo creado:', response),
      error: (error) => console.error('Error al crear vehículo:', error)
    });
  }

  onSubmitPersona(): void {
    this.personaService.createPersona(this.personaForm.value).subscribe({
      next: (response) => console.log('Persona creada:', response),
      error: (error) => console.error('Error al crear persona:', error)
    });
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible; 
  }

  navigateTo(path: string): void {
    this.router.navigate([path]); 
  }
}
