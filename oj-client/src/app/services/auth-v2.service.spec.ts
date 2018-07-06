import { TestBed, inject } from '@angular/core/testing';

import { AuthV2Service } from './auth-v2.service';

describe('AuthV2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthV2Service]
    });
  });

  it('should ...', inject([AuthV2Service], (service: AuthV2Service) => {
    expect(service).toBeTruthy();
  }));
});
