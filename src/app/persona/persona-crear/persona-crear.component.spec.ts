/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PersonaCrearComponent } from './persona-crear.component';
import { PersonaService } from '../persona.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EncabezadoAppModule } from '../../encabezado-app/encabezado-app.module';
import { EncabezadoComponent } from '../../encabezado-app/encabezado/encabezado.component';

describe('PersonaCrearComponent', () => {
  let component: PersonaCrearComponent;
  let fixture: ComponentFixture<PersonaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [PersonaCrearComponent, EncabezadoComponent],
      providers: [PersonaService, FormBuilder, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Existir form Rutina', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#msform');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir campo Nombre', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#nombre');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir campo Apellido', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#apellido');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir campo Edad', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#edad');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir campo Ingreso', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#ingreso');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir Boton de Siguiente', () => {
    const debugElement = fixture.debugElement.query(
      By.css('button[type=button]')
    );
    expect(debugElement).toBeTruthy();
  });

});
