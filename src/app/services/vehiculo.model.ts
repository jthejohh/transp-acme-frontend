// src/app/models/vehiculo.model.ts
export interface Vehiculo {
    id?: number; // Opcional, para cuando no hay un ID al crear
    placa: string;
    color: string;
    marca: string;
    tipo: string;
    conductor_id: number;
    propietario_id: number;
  }
  