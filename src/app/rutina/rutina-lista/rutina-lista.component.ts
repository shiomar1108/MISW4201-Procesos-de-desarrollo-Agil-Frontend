import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-rutina-lista',
  templateUrl: './rutina-lista.component.html',
  styleUrls: ['./rutina-lista.component.css']
})
export class RutinaListaComponent implements OnInit {

  rutinas: Array<Rutina>;
  esRutinaSeleccionada: Boolean = false;
  rutinaSeleccionada: Rutina;

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
    console.log(this.rutinaSeleccionada)
  };

  ngOnInit() {
    this.rutinas = this.rutinaService.darRutinas()
  }

}
