import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rutina } from './rutina';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Ejercicio } from '../ejercicio/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  rutinas: Array<Rutina> = [];
  ejercicios: Array<Ejercicio> = [];

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  darRutinas(): Observable<Rutina[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Rutina[]>(`${this.apiUrl}/rutinas`, { headers: headers })
  }

  darEjercicios(): Array<Ejercicio> {
    this.ejercicios = [];
    this.ejercicios.push(new Ejercicio(1,'Press de Pecho', 'Press de Pecho', '', 20));
    this.ejercicios.push(new Ejercicio(1,'Press de Pierna', 'Press de Pierna', '', 20));
    return this.ejercicios;
  }

}
