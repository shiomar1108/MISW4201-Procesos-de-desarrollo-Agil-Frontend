/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { faker } from "@faker-js/faker";
import { RutinaListaComponent } from './rutina-lista.component';
import { Rutina } from '../rutina';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { EncabezadoComponent } from 'src/app/encabezado-app/encabezado/encabezado.component';
import { RutinaService } from '../rutina.service';

describe('RutinaListaComponent', () => {
  let component: RutinaListaComponent;
  let fixture: ComponentFixture<RutinaListaComponent>;
  let debug: DebugElement;


  // Listado de rutinas
  let rutinas: Array<Rutina> = [];
  for (let index = 0; index < 10; index++) {
    rutinas.push(new Rutina(index, `Rutina ${faker.address.cityName()}`, `Rutina encargada de ${faker.lorem.sentence()}`));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, EncabezadoAppModule],
      declarations: [RutinaListaComponent, EncabezadoComponent],
      providers: [RutinaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaListaComponent);
    component = fixture.componentInstance;
    component.rutinas = rutinas;
    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir la sección listado de rutinas', () => {
    expect(document.getElementById("rutinaList"));
  });

  it('Debe existir el titulo rutinas ', () => {
    expect(debug.query(By.css("h3#title")).nativeElement.textContent).toContain('Rutinas');
  });

  it("Deberia existir la tabla rutinas", () => {
    expect(document.getElementById("rutinasTable"));
  });

});
