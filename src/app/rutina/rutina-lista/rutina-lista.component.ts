import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';
import { Ejercicio } from 'src/app/ejercicio/ejercicio';


@Component({
  selector: 'app-rutina-lista',
  templateUrl: './rutina-lista.component.html',
  styleUrls: ['./rutina-lista.component.css']
})
export class RutinaListaComponent implements OnInit {

  rutinas: Array<Rutina>;
  esRutinaSeleccionada: Boolean = false;
  rutinaSeleccionada: Rutina;
  ejercicios: Array<Ejercicio>;
  displayStyle = "none";
  ejercicioSeleccionadoId: number;

  constructor(
    private routerPath: Router,
    private rutinaService: RutinaService,
  ) { }

  rutinaCrear(): void {
    this.routerPath.navigate(['/rutina/crear']);
  }

  darRutina(idRutina: number): void {
    this.esRutinaSeleccionada = true;
    this.rutinaService.darRutina(idRutina).subscribe((rutina) => {
      this.rutinaSeleccionada = rutina;
      this.displayStyle = "none";
    })
  };

  asignarEjercicio(): void {
    if (this.ejercicioSeleccionadoId != null && this.ejercicioSeleccionadoId != undefined) {
      this.rutinaService.asignarEJercicio(this.rutinaSeleccionada.id, this.ejercicioSeleccionadoId).subscribe((rutina) => {
        this.rutinaSeleccionada = rutina;
        this.displayStyle = "none";
        this.darRutina(this.rutinaSeleccionada.id);
      })
    }
  }

  openPopup() {
    this.displayStyle = "block";
    this.rutinaService.darEjercicios(this.rutinaSeleccionada.id).subscribe((ejercicios) => {
      this.ejercicios = ejercicios;
    })
  }

  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit() {
    this.rutinaService.darRutinas().subscribe((rutinas) => {
      this.rutinas = rutinas;
    })
  }

}
