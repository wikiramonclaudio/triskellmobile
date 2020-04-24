import { TestBed } from '@angular/core/testing';

import { TkfirebaseService } from './tkfirebase.service';

describe('TkfirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TkfirebaseService = TestBed.get(TkfirebaseService);
    expect(service).toBeTruthy();
  });
});
