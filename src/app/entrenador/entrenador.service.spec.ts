/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntrenadorService } from './entrenador.service';
import { HttpClientModule } from '@angular/common/http';


describe('Service: Entrenador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrenadorService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([EntrenadorService], (service: EntrenadorService) => {
    expect(service).toBeTruthy();
  }));
});
