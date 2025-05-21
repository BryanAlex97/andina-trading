import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private apiUrl = 'http://localhost:3000/api/contratos';

  constructor(private http: HttpClient) {}

  getContratos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearContrato(data: { inversionista_id: number, comisionista_id: number }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
