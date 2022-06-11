import { TestBed } from '@angular/core/testing';

import { UserVerifiedGuard } from './user-verified.guard';

describe('UserVerifiedGuard', () => {
  let guard: UserVerifiedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserVerifiedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
