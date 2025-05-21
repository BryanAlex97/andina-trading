import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercadoService } from '../../services/mercado.service';

@Component({
  selector: 'app-mercado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})
export class MercadoComponent implements OnInit {
  acciones: any[] = [];
  cargando = true; // ← Activamos el spinner al inicio

  constructor(private mercadoService: MercadoService) {}

  ngOnInit(): void {
    this.mercadoService.getTopGainers().subscribe(data => {
      this.acciones = data;
      this.cargando = false; // ← Desactivamos el spinner al recibir los datos
    });
  }
}
