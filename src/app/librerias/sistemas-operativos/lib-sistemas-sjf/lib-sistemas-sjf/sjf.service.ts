import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SJFRequest {
  ids: number[];
  arrivals: number[];
  bursts: number[];
}

@Injectable({
  providedIn: 'root'
})
export class SjfService {

  private apiUrl = 'http://api.chacaleo.joptionpane.software/sistemas-service/api/sjf';

  constructor(private http: HttpClient) {}

  ejecutarSJF(request: SJFRequest): Observable<number[]> {
    return this.http.post<number[]>(this.apiUrl, request);
  }
}
