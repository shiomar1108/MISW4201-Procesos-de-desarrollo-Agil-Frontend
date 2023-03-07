import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Persona } from '../persona/persona';

@Injectable({
  providedIn: 'root',
})
export class EntrenadorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  darEntrenadores(): Observable<Persona[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Persona[]>(`${this.apiUrl}/entrenadores`, { headers: headers })
  }

  eliminarEntrenador(id: number): Observable<Persona> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.delete<Persona>(`${this.apiUrl}/entrenador/${id}`, { headers: headers })
  }

}
