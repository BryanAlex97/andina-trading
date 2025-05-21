import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InversionistaService } from '../../services/inversionista.service';

@Component({
  selector: 'app-inversionistas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inversionistas.component.html',
  styleUrls: ['./inversionistas.component.css']
})
export class InversionistasComponent implements OnInit {
  inversionistas: any[] = [];
  nuevo = { nombre: '', email: '' };

  constructor(private invService: InversionistaService) {}

  ngOnInit(): void {
    this.cargarInversionistas();
  }

  cargarInversionistas() {
    this.invService.getInversionistas().subscribe(data => {
      this.inversionistas = data;
    });
  }

  agregar() {
    this.invService.crearInversionista(this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', email: '' };
      this.cargarInversionistas();
    });
  }
}
