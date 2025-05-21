import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  resumen: any = null;
  cargando: boolean = true;

  constructor(private reporteService: ReporteService) {}

  ngOnInit(): void {
    this.reporteService.getResumen().subscribe({
      next: (data) => {
        this.resumen = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener el resumen:', err);
        this.cargando = false;
      }
    });
  }
}
