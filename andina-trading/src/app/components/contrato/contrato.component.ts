import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContratoService } from '../../services/contrato.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contrato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  contratos: any[] = [];
  inversionistas: any[] = [];
  comisionistas: any[] = [];

  nuevoContrato = {
    inversionista_id: '',
    comisionista_id: ''
  };

  constructor(
    private contratoService: ContratoService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.obtenerContratos();
    this.cargarInversionistas();
    this.cargarComisionistas();
  }

  obtenerContratos() {
    this.contratoService.getContratos().subscribe(data => {
      this.contratos = data;
    });
  }

  cargarInversionistas() {
    this.http.get<any[]>('http://localhost:3000/api/inversionistas').subscribe(data => {
      this.inversionistas = data;
    });
  }

  cargarComisionistas() {
    this.http.get<any[]>('http://localhost:3000/api/comisionistas').subscribe(data => {
      this.comisionistas = data;
    });
  }

  crearContrato() {
    this.contratoService.crearContrato({
      inversionista_id: Number(this.nuevoContrato.inversionista_id),
      comisionista_id: Number(this.nuevoContrato.comisionista_id)
    }).subscribe(() => {
      this.nuevoContrato = { inversionista_id: '', comisionista_id: '' };
      this.obtenerContratos();
    });
  }
}
