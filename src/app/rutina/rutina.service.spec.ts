/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RutinaService } from './rutina.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Rutina', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutinaService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([RutinaService], (service: RutinaService) => {
    expect(service).toBeTruthy();
  }));
});
