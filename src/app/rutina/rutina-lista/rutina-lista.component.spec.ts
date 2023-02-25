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
import { Ejercicio } from 'src/app/ejercicio/ejercicio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('RutinaListaComponent', () => {
  let component: RutinaListaComponent;
  let fixture: ComponentFixture<RutinaListaComponent>;
  let debug: DebugElement;

  //Listado de Ejercicio
  let ejercicios: Array<Ejercicio> = [];
  for (let index = 0; index < 4; index++) {
    ejercicios.push(new Ejercicio(index, `Ejercicio ${faker.address.cityName()}`, `Ejercicio encargada de ${faker.lorem.sentence()}`, faker.internet.url(), faker.datatype.number()))
  }

  // Listado de rutinas
  let rutinas: Array<Rutina> = [];
  for (let index = 0; index < 10; index++) {
    rutinas.push(new Rutina(index, `Rutina ${faker.address.cityName()}`, `Rutina encargada de ${faker.lorem.sentence()}`, ejercicios));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, EncabezadoAppModule, FormsModule],
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
    expect(document.getElementById("rutinaList")).toBeTruthy();;
  });

  it('Debe existir el titulo rutinas ', () => {
    expect(debug.query(By.css("h3#title")).nativeElement.textContent).toContain('Rutinas');
  });

  it("Deberia existir la tabla rutinas", () => {
    expect(document.getElementById("rutinasTable")).toBeTruthy();;
  });

  it("Deberia visualizarse en el listado de rutinas mas de 1 rutinas", () => {
    expect(debug.query(By.css("tbody tr")).childNodes.length).toBeGreaterThan(1);
  });

  it("Deberia existir por cada rutina los botones de detalle, editar y eliminar", () => {
    expect(debug.query(By.css("button.btn.btn-warning")).childNodes.length).toBeGreaterThan(0);
    expect(debug.query(By.css("button.btn.btn-primary")).childNodes.length).toBeGreaterThan(0);
    expect(debug.query(By.css("button.btn.btn-danger")).childNodes.length).toBeGreaterThan(0);
  });

  it("Deberia existir un modal para agregar ejercicios a la rutina", () => {
    expect(debug.query(By.css("div#modalEjercicio")).childNodes.length).toBeGreaterThan(0);
  });

  it("Deberia existir un con menu para agregar ejercicios a la rutina", () => {
    expect(debug.query(By.css("select#selectEjercicio")).childNodes.length).toBeGreaterThan(0);
  });

  it("Deberia existir un con dos botones para agregar ejercicios a la rutina", () => {
    expect(debug.query(By.css("button#botonagregar")).childNodes.length).toBeGreaterThan(0);
    expect(debug.query(By.css("button#botonCancelar")).childNodes.length).toBeGreaterThan(0);
  });

});
