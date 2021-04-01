import { TestBed } from '@angular/core/testing';

import { ICoeurServiceService } from './i-coeur-service.service';

describe('ICoeurServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ICoeurServiceService = TestBed.get(ICoeurServiceService);
    expect(service).toBeTruthy();
  });
});
