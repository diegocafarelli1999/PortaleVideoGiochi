import { TestBed } from '@angular/core/testing';

import { LogiGuardService } from './login-guard.service';

describe('LogiGuardService', () => {
  let service: LogiGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogiGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
