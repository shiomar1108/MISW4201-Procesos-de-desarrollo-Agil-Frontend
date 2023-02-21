
import { TestBed, async, inject } from '@angular/core/testing';
import { EntrenamientoService } from './entrenamiento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Entrenamiento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EntrenamientoService]
    });
  });

  it('should ...', inject([EntrenamientoService], (service: EntrenamientoService) => {
    expect(service).toBeTruthy();
  }));
});
