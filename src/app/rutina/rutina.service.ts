import { Injectable } from '@angular/core';
import { Rutina } from './rutina';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  rutinas: Array<Rutina> = [];

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  darRutinas(): Array<Rutina> {
    this.rutinas = [];
    this.rutinas.push(new Rutina(1, 'Rutina ejemplo 1', 'Descripcion de la rutina de ejemplo 1'));
    this.rutinas.push(new Rutina(2, 'Rutina ejemplo 2', 'Descripcion de la rutina de ejemplo 2'));
    return this.rutinas;
  }

}
