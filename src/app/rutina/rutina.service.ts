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

  darRutina(id_rutina: number): Observable<Rutina> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Rutina>(`${this.apiUrl}/rutina/${id_rutina}`, { headers: headers })
  }

  crearRutina(rutina: Rutina): Observable<Rutina[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.post<Rutina[]>(`${this.apiUrl}/rutinas`, rutina, { headers: headers })
  }

  darEjercicios(id_rutina: number): Observable<Ejercicio[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Ejercicio[]>(`${this.apiUrl}/rutina/${id_rutina}/diferente`, { headers: headers })
  }

  asignarEJercicio(idRutina: number, idEjercicio: number): Observable<Rutina>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.put<Rutina>(`${this.apiUrl}/rutina/${idRutina}/ejercicio/${idEjercicio}`, null, { headers: headers })
  }

  darRutinaEntrenamiento(): Observable<Rutina[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Rutina[]>(`${this.apiUrl}/rutinasEntrenamiento`, { headers: headers })
  }

}
