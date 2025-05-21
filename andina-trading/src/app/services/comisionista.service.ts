import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComisionistaService {
  private apiUrl = 'http://localhost:3000/api/comisionistas';

  constructor(private http: HttpClient) {}

  getComisionistas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearComisionista(comisionista: { nombre: string, cedula: string, email: string, pais_id: number }): Observable<any> {
    return this.http.post(this.apiUrl, comisionista);
  }  
}
