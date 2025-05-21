import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes: any[] = [];
  contratos: any[] = [];
  acciones: any[] = [];

  nuevaOrden = {
    contrato_id: '',
    accion_id: '',
    tipo: 'compra',
    cantidad: ''
  };

  constructor(
    private ordenService: OrdenService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.obtenerOrdenes();
    this.cargarContratos();
    this.cargarAcciones();
  }

  obtenerOrdenes() {
    this.ordenService.getOrdenes().subscribe(data => {
      this.ordenes = data;
    });
  }

  cargarContratos() {
    this.http.get<any[]>('http://localhost:3000/api/contratos').subscribe(data => {
      this.contratos = data;
    });
  }

  cargarAcciones() {
    this.http.get<any[]>('http://localhost:3000/api/acciones').subscribe(data => {
      this.acciones = data;
    });
  }

  crearOrden() {
    const ordenFormateada = {
      contrato_id: Number(this.nuevaOrden.contrato_id),
      accion_id: Number(this.nuevaOrden.accion_id),
      tipo: this.nuevaOrden.tipo,
      cantidad: Number(this.nuevaOrden.cantidad)
    };

    this.ordenService.crearOrden(ordenFormateada).subscribe(() => {
      this.nuevaOrden = {
        contrato_id: '',
        accion_id: '',
        tipo: 'compra',
        cantidad: ''
      };
      this.obtenerOrdenes();
    });
  }
}
