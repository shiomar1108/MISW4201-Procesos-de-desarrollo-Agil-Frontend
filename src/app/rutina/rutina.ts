import { Ejercicio } from "../ejercicio/ejercicio";

export class Rutina {
  id: number;
  nombre: string;
  descripcion: string;
  ejercicios: Array<Ejercicio>;


  public constructor(id: number, nombre: string, descripcion: string, ejercicios:Array<Ejercicio>) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.ejercicios = ejercicios;
  }
}
