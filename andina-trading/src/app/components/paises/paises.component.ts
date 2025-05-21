import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: any[] = [];
  nuevoPais = { nombre: '' };

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.paisService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  crearPais() {
    if (this.nuevoPais.nombre.trim()) {
      this.paisService.crearPais(this.nuevoPais).subscribe(() => {
        this.nuevoPais.nombre = '';
        this.obtenerPaises();
      });
    }
  }
}
