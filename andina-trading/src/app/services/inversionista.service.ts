import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InversionistaService {
  private apiUrl = 'http://localhost:3000/api/inversionistas';

  constructor(private http: HttpClient) {}

  getInversionistas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearInversionista(inversionista: { nombre: string, email: string }): Observable<any> {
    return this.http.post(this.apiUrl, inversionista);
  }
}