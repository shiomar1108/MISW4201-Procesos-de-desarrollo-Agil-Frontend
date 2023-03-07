import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/persona/persona';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-entrenador-lista',
  templateUrl: './entrenador-lista.component.html',
  styleUrls: ['./entrenador-lista.component.css']
})
export class EntrenadorListaComponent implements OnInit {

  elegida: Boolean = false
  entrenadores:Array<Persona>
  entrenadorElegido: Persona

  constructor(
    private routerPath: Router,
    private entrenadorService: EntrenadorService,
    private toastr: ToastrService,
  ) { }

  entrenadorCrear(): void {   }

  entrenadorDetalles(id:number):void {    }

  entrenadorEditar(id:number):void {    }

  entrenadorEliminar(id:number):void {    }

  ngOnInit() {
    this.entrenadorService.darEntrenadores().subscribe((entrenadores) => {
      this.entrenadores = entrenadores;
    })
  }

}
