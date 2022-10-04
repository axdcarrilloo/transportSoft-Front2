import { TestBed } from '@angular/core/testing';

import { FlotaServicioService } from './flota-servicio.service';

describe('FlotaServicioService', () => {
  let service: FlotaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlotaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
