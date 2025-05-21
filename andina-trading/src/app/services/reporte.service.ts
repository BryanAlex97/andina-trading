import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = 'http://localhost:3000/api/reportes/resumen';

  constructor(private http: HttpClient) {}

  getResumen(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
