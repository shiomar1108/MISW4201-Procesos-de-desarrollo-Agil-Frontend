/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EntrenamientoPersonaListaComponent } from './entrenamiento-persona-lista.component';
import { EntrenamientoService } from '../entrenamiento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('EntrenamientoPersonaListaComponent', () => {
  let component: EntrenamientoPersonaListaComponent;
  let fixture: ComponentFixture<EntrenamientoPersonaListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      declarations: [EntrenamientoPersonaListaComponent],
      providers: [EntrenamientoService, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenamientoPersonaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir la sección de Ejercicios', () => {
    expect(document.getElementById("ejerciciosCard")).toBeTruthy();;
  });

  it('Debe existir la sección de Rutinas', () => {
    expect(document.getElementById("rutinasCard")).toBeTruthy();;
  });

  it("Deberia tener h5 con Titulo Ejercicios", () => {
    expect(debug.query(By.css("h5#ejercicoTitle")).nativeElement.textContent).toContain("Ejercicios");
  });

  it("Deberia tener h5 con Titulo Rutinas ", () => {
    expect(debug.query(By.css("h5#rutinaTitle")).nativeElement.textContent).toContain("Rutinas");
  });

  it("Deberia tener buton para agregar Rutinas y uno para agregar ejercicios", () => {
    expect(debug.query(By.css("btn btn-warning")).childNodes.length).toBeGreaterThanOrEqual(2);
  });

  it("Deberia existir tabla de Ejercicios", () => {
    expect(debug.query(By.css("table#ejercicioTable")).nativeElement.textContent).toContain("Descripción");
    expect(debug.query(By.css("table#ejercicioTable")).nativeElement.textContent).toContain("Fecha");
    expect(debug.query(By.css("table#ejercicioTable")).nativeElement.textContent).toContain("Duración");
    expect(debug.query(By.css("table#ejercicioTable")).nativeElement.textContent).toContain("Repeticiones");
    expect(debug.query(By.css("table#ejercicioTable")).nativeElement.textContent).toContain("Acciones");
  });

  it("Deberia existir tabla de Rutinas", () => {
    expect(debug.query(By.css("table#rutinaTable")).nativeElement.textContent).toContain("Ejercicio");
    expect(debug.query(By.css("table#rutinaTable")).nativeElement.textContent).toContain("Fecha");
    expect(debug.query(By.css("table#rutinaTable")).nativeElement.textContent).toContain("Duración Total");
    expect(debug.query(By.css("table#rutinaTable")).nativeElement.textContent).toContain("Repeticiones Totales");
    expect(debug.query(By.css("table#rutinaTable")).nativeElement.textContent).toContain("Acciones");
  });

});
