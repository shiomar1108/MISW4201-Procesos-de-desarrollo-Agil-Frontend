import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css'],
})
export class UsuarioRegistroComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.usuarioForm = new FormGroup('');
  }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(4),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(4),
        ],
      ],
      usuario: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(4),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{8,}'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{8,}'
          ),
        ],
      ],
    });
  }

  registrarUsuario() {
    this.usuarioService
      .registro(
        this.usuarioForm.get('nombre')?.value,
        this.usuarioForm.get('apellido')?.value,
        this.usuarioForm.get('usuario')?.value,
        this.usuarioForm.get('password')?.value
      )
      .subscribe(
        (res) => {
          this.router.navigate([`/`]);
        },
        (error) => {
          this.toastrService.error(
            'Error en el registro. Verifique que el usuario no se encuentre ya registrado',
            'Error',
            { closeButton: true }
          );
        }
      );
  }
}
