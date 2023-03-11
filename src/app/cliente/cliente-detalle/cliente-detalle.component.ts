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

  persona: Persona
  imc: number
  clasificacion: string
  resultados: any
  repeticiones_totales: number;
  calorias_totales: number;

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
    });
  }

  personaReporte(idPersona: number): void {
    console.log("si")
    // this.routerPath.navigate(['/persona/reporte/' + idPersona]);

    // const idPersona = parseInt(this.router.snapshot.params['id']);
    let repeticiones_totales = 0
    let calorias_totales = 0
    this.personaService.darReporte(idPersona).subscribe((reporte) => {
      //console.log(reporte)
      this.persona = reporte.persona
      this.imc = reporte.imc
      this.clasificacion = reporte.clasificacion_imc
      //this.resultados = reporte.resultados
    });
    this.personaService.darResultados(idPersona).subscribe((resultados) => {
      console.log(resultados)
      this.resultados = resultados
      for(let i=0; i<resultados.length; i++){
        repeticiones_totales = repeticiones_totales + resultados[i]['Repeticiones Ejecutadas'];
        calorias_totales = calorias_totales + resultados[i]['Calorias Consumidas'];
      }
      this.repeticiones_totales = repeticiones_totales;
      this.calorias_totales = calorias_totales;
    });
  }

  volver(): void {
    this.routerPath.navigate(['/cliente']);
  }
}
