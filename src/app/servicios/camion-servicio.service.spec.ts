import { TestBed } from '@angular/core/testing';

import { CamionServicioService } from './camion-servicio.service';

describe('CamionServicioService', () => {
  let service: CamionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
