import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private apiUrl = 'http://localhost:3000/api/ordenes';

  constructor(private http: HttpClient) {}

  getOrdenes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearOrden(orden: { contrato_id: number, accion_id: number, tipo: string, cantidad: number }): Observable<any> {
    return this.http.post(this.apiUrl, orden);
  }
}
