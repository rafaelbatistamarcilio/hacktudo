import { TestBed } from '@angular/core/testing';

import { DespesaService } from './despesa.service';

describe('DespesaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespesaService = TestBed.get(DespesaService);
    expect(service).toBeTruthy();
  });
});
