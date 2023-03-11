/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntrenamientoRutinaCrearComponent } from './entrenamientoRutina-crear.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EntrenamientoService } from '../entrenamiento.service';
import { RutinaService } from 'src/app/rutina/rutina.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EncabezadoAppModule } from '../../encabezado-app/encabezado-app.module';
import { EncabezadoComponent } from '../../encabezado-app/encabezado/encabezado.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('EntrenamientoRutinaCrearComponent', () => {
  let component: EntrenamientoRutinaCrearComponent;
  let fixture: ComponentFixture<EntrenamientoRutinaCrearComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [ EntrenamientoRutinaCrearComponent,EncabezadoComponent ],
      providers: [EntrenamientoService, ToastrService, RutinaService, FormBuilder,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenamientoRutinaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Deberia existir titulo", () => {
    expect(debug.query(By.css("h3")).nativeElement.textContent).toContain("Entrenamiento de Rutina");
  });

  it("Deberia existir select de Rutinas", () => {
    expect(document.getElementById("select#rutinas"));
  });

  it("Deberia existir input de Fecha", () => {
    expect(document.getElementById("input#fecha"));
  });

  it('Debe Existir Boton de Crear', () => {
    const debugElement = fixture.debugElement.query(
      By.css('button[type=submit]')
    );
    expect(debugElement).toBeFalsy();
  });

  it('Debe Existir Boton de Cancelar', () => {
    const debugElement = fixture.debugElement.query(
      By.css('button[type=button]')
    );
    expect(debugElement).toBeTruthy();
  });
});
