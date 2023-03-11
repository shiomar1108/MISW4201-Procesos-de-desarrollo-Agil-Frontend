import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-reporte',
  templateUrl: './persona-reporte.component.html',
  styleUrls: ['./persona-reporte.component.css']
})
export class PersonaReporteComponent implements OnInit {

  persona: Persona
  imc: number
  clasificacion: string
  resultados: any
  repeticiones_totales: number;
  calorias_totales: number;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    const idPersona = parseInt(this.router.snapshot.params['id']);
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
    const idPersona = parseInt(this.router.snapshot.params['id']);
    this.routerPath.navigate(['/persona/' + idPersona]);
  }
}
