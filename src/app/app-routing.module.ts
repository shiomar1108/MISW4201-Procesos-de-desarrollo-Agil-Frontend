import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { UsuarioRegistroComponent } from './usuario/usuario-registro/usuario-registro.component';
import { PersonaListaComponent } from './persona/persona-lista/persona-lista.component';
import { PersonaCrearComponent } from './persona/persona-crear/persona-crear.component';
import { PersonaEditarComponent } from './persona/persona-editar/persona-editar.component';
import { PersonaTerminarComponent } from './persona/persona-terminar/persona-terminar.component';
import { PersonaReporteComponent } from './persona/persona-reporte/persona-reporte.component';
import { EjercicioListaComponent } from './ejercicio/ejercicio-lista/ejercicio-lista.component';
import { EjercicioCrearComponent } from './ejercicio/ejercicio-crear/ejercicio-crear.component';
import { EjercicioEditarComponent } from './ejercicio/ejercicio-editar/ejercicio-editar.component';
import { EntrenamientoCrearComponent } from './entrenamiento/entrenamiento-crear/entrenamiento-crear.component';
import { EntrenamientoEditarComponent } from './entrenamiento/entrenamiento-editar/entrenamiento-editar.component';
import { RutinaCrearComponent } from './rutina/rutina-crear/rutina-crear.component';
import { EntrenadorListaComponent } from './entrenador/entrenador-lista/entrenador-lista.component';
import { RutinaListaComponent } from './rutina/rutina-lista/rutina-lista.component';
import { EntrenamientoRutinaCrearComponent } from './entrenamiento/entrenamientoRutina-crear/entrenamientoRutina-crear.component';
import { ClienteDetalleComponent } from './cliente/cliente-detalle/cliente-detalle.component';

const routes: Routes = [
  { path: '', component: UsuarioLoginComponent, pathMatch: 'full' },
  { path: 'registro', component: UsuarioRegistroComponent, pathMatch: 'full' },
  { path: 'persona/crear', component: PersonaCrearComponent, pathMatch: 'full' },
  { path: 'persona', component: PersonaListaComponent, pathMatch: 'full' },
  { path: 'persona/:id', component: PersonaListaComponent, pathMatch: 'full' },
  { path: 'persona/editar/:id', component: PersonaEditarComponent, pathMatch: 'full' },
  { path: 'persona/reporte/:id', component: PersonaReporteComponent, pathMatch: 'full' },
  { path: 'persona/terminar/:id', component: PersonaTerminarComponent, pathMatch: 'full' },
  { path: 'ejercicio', component: EjercicioListaComponent, pathMatch: 'full' },
  { path: 'ejercicio/crear', component: EjercicioCrearComponent, pathMatch: 'full' },
  { path: 'ejercicio/editar/:id', component: EjercicioEditarComponent, pathMatch: 'full' },
  { path: 'entrenamiento/crear/:idPersona', component: EntrenamientoCrearComponent, pathMatch: 'full' },
  { path: 'entrenamiento/editar/:id', component: EntrenamientoEditarComponent, pathMatch: 'full' },
  { path: 'rutina/crear', component: RutinaCrearComponent, pathMatch: 'full' },
  { path: 'rutinas', component: RutinaListaComponent, pathMatch: 'full' },
  { path: 'entrenador', component: EntrenadorListaComponent, pathMatch: 'full' },
  { path: 'entrenamientoRutina/crear/:idPersona', component: EntrenamientoRutinaCrearComponent, pathMatch: 'full' },
  { path: 'cliente', component: ClienteDetalleComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
