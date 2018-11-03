import { TestBed } from '@angular/core/testing';

import { VagasService } from './vagas.service';

describe('VagasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VagasService = TestBed.get(VagasService);
    expect(service).toBeTruthy();
  });
});
