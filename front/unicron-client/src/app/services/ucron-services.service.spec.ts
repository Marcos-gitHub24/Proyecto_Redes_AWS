import { TestBed } from '@angular/core/testing';

import { UcronServicesService } from './ucron-services.service';

describe('UcronServicesService', () => {
  let service: UcronServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UcronServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
