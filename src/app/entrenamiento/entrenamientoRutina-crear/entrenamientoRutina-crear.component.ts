import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonaService } from 'src/app/persona/persona.service';
import { EntrenamientoService } from '../entrenamiento.service';
import { Persona } from 'src/app/persona/persona';
import { Entrenamiento } from '../entrenamiento';
import { RutinaService } from 'src/app/rutina/rutina.service';
import { Rutina } from 'src/app/rutina/rutina';

@Component({
  selector: 'app-entrenamientoRutina-crear',
  templateUrl: './entrenamientoRutina-crear.component.html',
  styleUrls: ['./entrenamientoRutina-crear.component.css']
})
export class EntrenamientoRutinaCrearComponent implements OnInit {

  persona: Persona;
  entrenamientoRutinaForm: FormGroup;
  rutinas: Array<Rutina>;
  rutinaSeleccionada!: Rutina;
  esRutinaSeleccionada: boolean;
  personaId = parseInt(this.router.snapshot.params['idPersona']);

  arrayEjercicio = [];
  repeticionSeleccionado: string;
  tiempoSeleccionado: string;
  fechaSeleccionada: string;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private rutinaService: RutinaService,
    private entrenamientoService: EntrenamientoService
  ) { }

  ngOnInit() {

    this.personaService.darPersona(this.personaId).subscribe((persona) => {
      this.persona = persona
      this.esRutinaSeleccionada = false;
      this.rutinaService.darRutinaEntrenamiento().subscribe((rutinas) => {
        this.rutinas = rutinas
        console.log(rutinas)
        this.entrenamientoRutinaForm = this.formBuilder.group({
          idPersona: this.persona.id,
          rutina: ["", Validators.required],
          fecha: [new Date(), [Validators.required, Validators.minLength(10)]],
          tiempo: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
          repeticiones: ["", Validators.required]
        });

      });

    });

  }


  agregarEntrenameinto(ejercicio) {
    this.arrayEjercicio.push({
      tiempo: this.tiempoSeleccionado,
      repeticiones: this.repeticionSeleccionado,
      ejercicio: ejercicio
    });
    this.toastr.success("Confirmation", "Entrenamiento confirmado "+ ejercicio)
  }


  onKeyFecha(event) {
    this.fechaSeleccionada = event.target.value;
  }

  onKeyRepeticion(event) {
    this.repeticionSeleccionado = event.target.value;
  }

  onKeyTiempo(event) {
    this.tiempoSeleccionado = event.target.value;
  }

  // crearEntreRutina(entrenamiento: Entrenamiento): void {
  crearEntreRutina(): void {
    let nuevoEntrenamientoRutina = {
      idRutina: this.rutinaSeleccionada.id,
      fecha: this.fechaSeleccionada,
      idPersona: this.personaId,
      entrenamientos: this.arrayEjercicio
    };
    console.log(nuevoEntrenamientoRutina);

    this.entrenamientoService.crearEntrenRutina(nuevoEntrenamientoRutina, this.persona.id).subscribe((entrenamiento) => {
      this.toastr.success("Confirmation", "Entrenamiento creado")
      this.entrenamientoRutinaForm.reset();
      this.routerPath.navigate(['/persona/' + this.persona.id]);
    },
      error => {
        if (error.statusText === "UNAUTHORIZED") {
          this.toastr.error("Error", "Su sesión ha caducado, por favor vuelva a iniciar sesión.")
        }
        else if (error.statusText === "UNPROCESSABLE ENTITY") {
          this.toastr.error("Error", "No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
        }
        else {
          this.toastr.error("Error", "Ha ocurrido un error. " + error.message)
        }
      })

  }

  cancelarEntreRutina(): void {
    const personaId = parseInt(this.router.snapshot.params['idPersona']);
    this.entrenamientoRutinaForm.reset();
    this.routerPath.navigate(['/persona/' + personaId]);
  }

  selectionarRutina(): void {
    this.esRutinaSeleccionada = true;
    console.log(this.rutinaSeleccionada)
  }

}
