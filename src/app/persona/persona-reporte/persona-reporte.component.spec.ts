/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PersonaReporteComponent } from './persona-reporte.component';
import { PersonaService } from '../persona.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EncabezadoAppModule } from '../../encabezado-app/encabezado-app.module';
import { EncabezadoComponent } from '../../encabezado-app/encabezado/encabezado.component';
import { Persona } from '../persona';
import { faker } from '@faker-js/faker';

describe('PersonaReporteComponent', () => {
  let component: PersonaReporteComponent;
  let fixture: ComponentFixture<PersonaReporteComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, EncabezadoAppModule, ToastrModule.forRoot(), RouterTestingModule],
      declarations: [PersonaReporteComponent, EncabezadoComponent],
      providers: [PersonaService, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaReporteComponent);
    component = fixture.componentInstance;

    let resultados: Array<any> = [];
    let tipo: string = null
    for(let i=0; i<5; i++){
      if(i%2==0){
        tipo='Ejercicio'
      }
      else{
        tipo='Rutina'
      }
      resultados.push({
            'fecha': faker.datatype.datetime(),
            'Tipo de Entrenamiento': tipo,
            'Repeticiones Ejecutadas': faker.random.numeric(2),
            'Calorias Consumidas': faker.random.numeric(2)
          }
      )
    }

    const persona = new Persona(
      faker.datatype.number({min:1, max:10}),
      faker.name.firstName(),
      faker.name.lastName(),
      faker.datatype.number({min:15, max:90}),
      faker.datatype.number({min:15, max:90}),
      faker.datatype.number({min:15, max:90}),
      faker.datatype.datetime(),
      faker.datatype.number({min:15, max:90}),
      faker.datatype.number({min:15, max:90}),
      faker.datatype.number({min:15, max:90}),
      faker.datatype.number({min:15, max:90}),
      true,
      null,
      null,
      1
    )
    const imc = faker.datatype.number({min:5, max:30})
    const clasificacion = 'bajo';
    component.resultados = resultados;
    component.persona = persona;
    component.imc = imc;
    component.clasificacion = clasificacion;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('La tabla contiene 4 columnas para desplegar cuatro atributos', () => {
    expect(debug.queryAll(By.css('th[scope="col"]'))).toHaveSize(4)
  });

  it('La primera columna de la tabla contiene 5 filas cada una con la fecha del entrenamiento', () => {
    debug.queryAll(By.css('td[class="fecha"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.resultados[i]['fecha'])
    });
  });

  it('La segunda columna de la tabla contiene 5 filas cada una con el tipo de entrenamiento', () => {
    debug.queryAll(By.css('td[class="tipo"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.resultados[i]['Tipo de Entrenamiento'])
    });
  });

  it('La tercera columna de la tabla contiene 5 filas cada una con el numero de repeticiones', () => {
    debug.queryAll(By.css('td[class="repeticiones"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.resultados[i]['Repeticiones Ejecutadas'])
    });
  });

  it('La cuarta columna de la tabla contiene 5 filas cada una con las calorias consumidas', () => {
    debug.queryAll(By.css('td[class="calorias"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.resultados[i]['Calorias Consumidas'])
    });
  });

});
