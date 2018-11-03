import { TestBed } from '@angular/core/testing';

import { DenunciaService } from './denuncia.service';

describe('DenunciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DenunciaService = TestBed.get(DenunciaService);
    expect(service).toBeTruthy();
  });
});
