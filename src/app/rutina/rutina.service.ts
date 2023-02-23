import { Injectable } from '@angular/core';
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

  darRutinas(): Array<Rutina> {
    this.rutinas = [];
    this.rutinas.push(new Rutina(1, 'Rutina ejemplo 1', 'Descripcion de la rutina de ejemplo 1'));
    this.rutinas.push(new Rutina(2, 'Rutina ejemplo 2', 'Descripcion de la rutina de ejemplo 2'));
    return this.rutinas;
  }

  darEjercicios(): Array<Ejercicio> {
    this.ejercicios = [];
    this.ejercicios.push(new Ejercicio(1,'Press de Pecho', 'Press de Pecho', '', 20));
    this.ejercicios.push(new Ejercicio(1,'Press de Pierna', 'Press de Pierna', '', 20));
    return this.ejercicios;
  }

}
