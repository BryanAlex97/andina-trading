import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComisionistaService } from '../../services/comisionista.service';

@Component({
  selector: 'app-comisionistas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comisionistas.component.html',
  styleUrls: ['./comisionistas.component.css']
})
export class ComisionistasComponent implements OnInit {
  comisionistas: any[] = [];
  nuevo = {
    nombre: '',
    cedula: '',
    email: '',
    pais_id: 1 // ← puedes cambiarlo por defecto o convertirlo en select luego
  };

  constructor(private comService: ComisionistaService) {}

  ngOnInit(): void {
    this.cargarComisionistas();
  }

  cargarComisionistas() {
    this.comService.getComisionistas().subscribe(data => {
      this.comisionistas = data;
    });
  }

  agregar() {
    if (!this.nuevo.nombre || !this.nuevo.cedula || !this.nuevo.email) return;

    this.comService.crearComisionista(this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', cedula: '', email: '', pais_id: 1 };
      this.cargarComisionistas();
    });
  }
}
