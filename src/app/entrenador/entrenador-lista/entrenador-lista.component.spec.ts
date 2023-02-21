/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntrenadorService } from '../entrenador.service'
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { EntrenadorListaComponent } from './entrenador-lista.component';

describe('Entrenador-Lista-Component', () => {
  let component: EntrenadorListaComponent;
  let fixture: ComponentFixture<EntrenadorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        EncabezadoAppModule,
        ToastrModule.forRoot(),
      ],
      declarations: [EntrenadorListaComponent],
      providers: [EntrenadorService, ToastrService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Existir seccion de Listado', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#entrenadorList');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir seccion de Detalle', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#entrenadorDetails');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir el titulo "Entrenadores"', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#entrenadorTitle');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir botton crear', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('button.btn.btn-warning');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir Tabla de Entrenador"', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('table#entrenadorTable');
    expect(debugElement).toBeTruthy();
  });

});
