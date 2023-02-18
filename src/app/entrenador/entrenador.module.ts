import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrenadorListaComponent } from './entrenador-lista/entrenador-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { RouterModule } from '@angular/router';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    EncabezadoAppModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  declarations: [EntrenadorListaComponent],
  exports: [EntrenadorListaComponent],
})
export class EntrenadorModule {}
