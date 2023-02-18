/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioRegistroComponent } from './usuario-registro.component';

describe('UsuarioRegistroComponent', () => {
  let component: UsuarioRegistroComponent;
  let fixture: ComponentFixture<UsuarioRegistroComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioRegistroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería realizar el setup de las pruebas', () => {
    expect(component).toBeTruthy();
  });

  it("Debería existir el titulo de la página con el valor de En Forma", () => {
    expect(document.getElementById("h2#application-name"));
    expect(debug.query(By.css("h2#application-name")).nativeElement.textContent).toContain("En Forma");
  });

  it('Debería existir el formulario de usuario', () => {
    expect(document.getElementById("form#createForm"));
  });

  it('Debería existir el inputText de nombre', () => {
    expect(document.getElementById("input#nombre"));
  });

  it('Debería existir el inputText de apellido', () => {
    expect(document.getElementById("input#apellido"));
  });

  it('Debería existir el inputText de usuario', () => {
    expect(document.getElementById("input#usuario"));
  });

  it('Debería existir el inputText de password', () => {
    expect(document.getElementById("input#password"));
  });

  it('Debería existir el inputText de confirm-password', () => {
    expect(document.getElementById("input#confirm-password"));
  });

  it("Debería existir el boton de registrarse", () => {
    expect(document.getElementById("button.btn.btn-warning.col-8"));
  });

  it("Debería existir el boton de registrarse", () => {
    expect(debug.query(By.css("a#iniciar-sesion")).nativeElement.textContent).toContain("Inicia sesión");
  });

});
