/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EjercicioService } from './ejercicio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Ejercicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EjercicioService]
    });
  });

  it('should ...', inject([EjercicioService], (service: EjercicioService) => {
    expect(service).toBeTruthy();
  }));
});
