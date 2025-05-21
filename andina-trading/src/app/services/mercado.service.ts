import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadoService {
  private apiKey = '6pxaNPGAE0JXiJs3aJ7QpYK4K5JmUtI2';  // ← tu clave personal
  private baseUrl = 'https://financialmodelingprep.com/api/v3';

  constructor(private http: HttpClient) {}

  getTopGainers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stock_market/gainers?apikey=${this.apiKey}`);
  }

  getCompanyProfile(symbol: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile/${symbol}?apikey=${this.apiKey}`);
  }
}
