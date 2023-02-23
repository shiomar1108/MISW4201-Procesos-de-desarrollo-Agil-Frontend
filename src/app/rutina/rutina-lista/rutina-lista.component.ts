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

  constructor(
    private routerPath: Router,
    private rutinaService: RutinaService,
  ) { }

  rutinaCrear(): void {
    this.routerPath.navigate(['/rutina/crear']);
  }

  darRutina(rutina: Rutina): void {
    this.esRutinaSeleccionada = true;
    this.rutinaSeleccionada = rutina;
  };

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit() {
    this.rutinaService.darRutinas().subscribe((rutinas) => {
      this.rutinas = rutinas;
    })
    this.ejercicios = this.rutinaService.darEjercicios()
  }

}
