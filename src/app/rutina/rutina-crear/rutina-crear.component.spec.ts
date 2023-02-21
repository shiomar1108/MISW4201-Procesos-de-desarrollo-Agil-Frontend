/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutinaCrearComponent } from './rutina-crear.component';
import { ToastrModule } from 'ngx-toastr';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';


describe('RutinaCrearComponent', () => {
  let component: RutinaCrearComponent;
  let fixture: ComponentFixture<RutinaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        EncabezadoAppModule,
        ToastrModule.forRoot()
      ],
      declarations: [RutinaCrearComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Existir form Rutina', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#rutinaForm');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir campo Nombre', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#nombre');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir campo Descripcion', () => {
    const debugElement =
      fixture.debugElement.nativeElement.querySelector('#descripcion');
    expect(debugElement).toBeTruthy();
  });

  it('Debe Existir Boton de Crear Desabilitado', () => {
    const debugElement = fixture.debugElement.query(
      By.css('button[type=submit]')
    );
    expect(debugElement.nativeElement.disabled).toBe(true);
  });

  it('Debe Existir Boton de Cancelar', () => {
    const debugElement = fixture.debugElement.query(
      By.css('button[type=button]')
    );
    expect(debugElement).toBeTruthy();
  });
});
