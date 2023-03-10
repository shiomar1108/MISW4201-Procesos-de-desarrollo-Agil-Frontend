import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-crear',
  templateUrl: './persona-crear.component.html',
  styleUrls: ['./persona-crear.component.css'],
})
export class PersonaCrearComponent implements OnInit {
  informacionPersonalForm!: FormGroup;
  informacionMedidasForm!: FormGroup;
  informacionAccesoForm!: FormGroup;
  informacionPersonalFormStep = false;
  informacionMedidasFormStep = false;
  informacionAccesoFormStep = false;
  step = 1;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.informacionPersonalForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      edad: ['', Validators.required],
      ingreso: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.informacionMedidasForm = this.formBuilder.group({
      talla: ['', Validators.required],
      peso: ['', Validators.required],
      brazo: ['', Validators.required],
      pecho: ['', Validators.required],
      cintura: ['', Validators.required],
      pierna: ['', Validators.required]
    });
    this.informacionAccesoForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(2)]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{8,}'
          ),
        ],
      ],
      confirmar: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{8,}'
          ),
        ],
      ]
    });
  }

  crearPersona(): void {
    this.personaService.crearPersona(this.construirPersona()).subscribe(
      (persona) => {
        this.toastr.success('Confirmation', 'Persona creada');
        this.routerPath.navigate(['/persona/' + persona.id]);
      },
      (error) => {
        if (error.statusText === 'UNAUTHORIZED') {
          this.toastr.error(
            'Error',
            'Su sesión ha caducado, por favor vuelva a iniciar sesión.'
          );
        } else if (error.statusText === 'UNPROCESSABLE ENTITY') {
          this.toastr.error(
            'Error',
            'No hemos podido identificarlo, por favor vuelva a iniciar sesión.'
          );
        } else {
          this.toastr.error('Error', 'Ha ocurrido un error. ' + error.message);
        }
      }
    );
  }

  construirPersona() {
    let infoPersona = this.informacionPersonalForm.value;
    let infoMedidas = this.informacionMedidasForm.value;
    let inforAcceso = this.informacionAccesoForm.value;
    return {
      "nombre": infoPersona.nombre,
      "apellido": infoPersona.apellido,
      "talla": infoMedidas.talla,
      "peso": infoMedidas.peso,
      "edad": infoPersona.edad,
      "ingreso": infoPersona.ingreso,
      "brazo": infoMedidas.brazo,
      "pecho": infoMedidas.pecho,
      "cintura": infoMedidas.cintura,
      "pierna": infoMedidas.pierna,
      "entrenando": true,
      "razon": "",
      "terminado": "1900-01-01",
      "usuario": inforAcceso.usuario,
      "contrasena": inforAcceso.contrasena
    };
  }

  cancelarPersona(): void {
    this.routerPath.navigate(['/persona']);
  }

  next() {
    if (this.step == 1) {
      this.informacionPersonalFormStep = true;
      if (this.informacionPersonalForm.invalid) { return }
      this.step++
    }
    if (this.step == 2) {
      this.informacionMedidasFormStep = true;
      if (this.informacionMedidasForm.invalid) { return }
      this.step++;
    }
  }

  previous() {
    this.step--
    if (this.step == 1) {
      this.informacionPersonalFormStep = false;
    }
    if (this.step == 2) {
      this.informacionAccesoFormStep = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.informacionAccesoFormStep = true;
      if (this.informacionAccesoForm.invalid) { return }
    }
  }
}
