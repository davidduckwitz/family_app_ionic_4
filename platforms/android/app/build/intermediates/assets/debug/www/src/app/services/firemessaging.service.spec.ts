import { TestBed } from '@angular/core/testing';

import { FiremessagingService } from './firemessaging.service';

describe('FiremessagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiremessagingService = TestBed.get(FiremessagingService);
    expect(service).toBeTruthy();
  });
});
