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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
