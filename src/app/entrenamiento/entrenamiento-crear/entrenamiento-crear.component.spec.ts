/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EntrenamientoCrearComponent } from './entrenamiento-crear.component';
import { EntrenamientoService } from '../entrenamiento.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EncabezadoAppModule } from '../../encabezado-app/encabezado-app.module';
import { EncabezadoComponent } from '../../encabezado-app/encabezado/encabezado.component';

describe('EntrenamientoCrearComponent', () => {
  let component: EntrenamientoCrearComponent;
  let fixture: ComponentFixture<EntrenamientoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [EntrenamientoCrearComponent, EncabezadoComponent],
      providers: [EntrenamientoService, FormBuilder, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenamientoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
