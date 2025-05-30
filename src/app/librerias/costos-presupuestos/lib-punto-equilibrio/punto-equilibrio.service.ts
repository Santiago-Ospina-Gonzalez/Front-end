import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PuntoEquilibrioRequest, PuntoEquilibrioResponse } from './punto-equilibrio.model';

@Injectable({
  providedIn: 'root'
})
export class PuntoEquilibrioService {
  private apiUrl = 'http://api.chacaleo.joptionpane.software/api/v1/libpuntoequilibrio-service/calcularPuntoEquilibrio';

  constructor(private http: HttpClient) {}

  calcularPuntoEquilibrio(payload: PuntoEquilibrioRequest): Observable<PuntoEquilibrioResponse> {
    return this.http.post<PuntoEquilibrioResponse>(this.apiUrl, payload);
  }
}
