import { Persona } from './../persona/persona';
import { Ejercicio } from './../ejercicio/ejercicio';
export class Entrenamiento {
    id: number;
    ejercicio: Ejercicio;
    persona: Persona;
    tiempo: string;
    repeticiones: number;
    fecha: Date;

    public constructor(id: number, ejercicio: Ejercicio, persona: Persona, tiempo: string, repeticiones: number, fecha: Date) {
        this.id = id;
        this.ejercicio = ejercicio;
        this.persona = persona;
        this.tiempo = tiempo;
        this.repeticiones = repeticiones;
        this.fecha = fecha;
    }

}

export class EntrenamientoRutina {
  id: number;
  entrenamientos: Array<Entrenamiento>;
  persona: Persona;
  tiempoTotal: string;
  repeticionesTotales: number;
  fecha: Date;

  public constructor(id: number, entrenamientos:Array<Entrenamiento>, persona: Persona, fecha: Date, tiempoTotal: string, repeticionesTotales: number) {
    this.id = id;
    this.entrenamientos = entrenamientos;
    this.persona = persona;
    this.fecha = fecha;
    this.repeticionesTotales = repeticionesTotales;
    this.tiempoTotal = tiempoTotal;
  }

}
