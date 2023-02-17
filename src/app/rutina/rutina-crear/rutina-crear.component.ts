import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { Rutina } from '../rutina';

@Component({
  selector: 'app-rutina-crear',
  templateUrl: './rutina-crear.component.html',
  styleUrls: ['./rutina-crear.component.css']
})
export class RutinaCrearComponent implements OnInit {

  rutinaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.rutinaForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(80)]],
      descripcion: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    });
  }

  crearRutina(rutina: Rutina): void { }

  cancelarRutina(): void {
    this.rutinaForm.reset();
    /* Regresar a pagina principal */
    this.routerPath.navigate(['']);
  }

}
