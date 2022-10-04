import { TestBed } from '@angular/core/testing';

import { PuertoServicioService } from './puerto-servicio.service';

describe('PuertoServicioService', () => {
  let service: PuertoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuertoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
