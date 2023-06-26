import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthGuardGuard } from './auth-guard.guard';
import { AuthServiceService } from './auth-service.service';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardGuard,
        AuthServiceService,
        { provide: Router, useValue: mockRouter },
      ],
    });
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should be login', () => {
    guard.authS.authToeken = true;
    const callFunction = guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );
    expect(callFunction).toBe(true);
  });
  it('should be login', () => {
    guard.authS.authToeken = false;
    const callFunction = guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );
    expect(callFunction).toBe(false);
  });
});
