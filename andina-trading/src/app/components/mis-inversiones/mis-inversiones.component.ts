import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inversiones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inversiones.component.html',
  styleUrls: ['./inversiones.component.css']
})
export class MisnversionesComponent implements OnInit {
  inversionistas: any[] = [];
  idInversionista: number | null = null;
  contratos: any[] = [];
  ordenes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarInversionistas();
  }

  cargarInversionistas() {
    this.http.get<any[]>('http://localhost:3000/api/inversionistas')
      .subscribe(data => {
        this.inversionistas = data;
      });
  }

  consultar() {
    if (!this.idInversionista) return;

    this.http.get<any[]>(`http://localhost:3000/api/inversionistas/${this.idInversionista}/contratos`)
      .subscribe(data => this.contratos = data);

    this.http.get<any[]>(`http://localhost:3000/api/inversionistas/${this.idInversionista}/ordenes`)
      .subscribe(data => this.ordenes = data);
  }
}
