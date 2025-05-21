import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://localhost:3000/api/paises';

  constructor(private http: HttpClient) {}

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearPais(pais: { nombre: string }): Observable<any> {
    return this.http.post(this.apiUrl, pais);
  }
}
