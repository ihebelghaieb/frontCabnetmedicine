import { TestBed } from '@angular/core/testing';

import { CabinetMedecinService } from './cabinet-medecin.service';

describe('CabinetMedecinService', () => {
  let service: CabinetMedecinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinetMedecinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
