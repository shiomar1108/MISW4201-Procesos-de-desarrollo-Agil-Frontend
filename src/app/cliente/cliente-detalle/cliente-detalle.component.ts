import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/persona/persona';
import { PersonaService } from 'src/app/persona/persona.service';


@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  personas:Array<Persona> = []
  elegida: Boolean = false
  personaElegida: Persona
  idUsuario: string

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private personaService: PersonaService
    ) { }



  ngOnInit() {
    this.idUsuario = sessionStorage.getItem('idUsuario');
    this.personaService.darPersona(Number(this.idUsuario)).subscribe((persona) => {
      this.elegida = true;
      this.personaElegida = persona;
      this.personas.push(this.personaElegida);
    });;

  }

  personaReporte(idPersona: number): void {
    console.log("si")
    this.routerPath.navigate(['/persona/reporte/' + idPersona]);
  }
}
