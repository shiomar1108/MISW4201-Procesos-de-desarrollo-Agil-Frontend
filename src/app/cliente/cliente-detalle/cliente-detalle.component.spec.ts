/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteDetalleComponent } from './cliente-detalle.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { PersonaService } from '../../persona/persona.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncabezadoAppModule } from '../../encabezado-app/encabezado-app.module';
import { EncabezadoComponent } from '../../encabezado-app/encabezado/encabezado.component';

describe('ClienteDetalleComponent', () => {
  let component: ClienteDetalleComponent;
  let fixture: ComponentFixture<ClienteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, EncabezadoAppModule, ToastrModule.forRoot(), RouterTestingModule],
      declarations: [ClienteDetalleComponent, EncabezadoComponent],
      providers: [PersonaService, ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
