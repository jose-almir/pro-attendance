import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { VerifyEmailComponent } from 'src/app/auth/verify-email/verify-email.component';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserVerifiedGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return authState(this.auth).pipe(
      map((user) => {
        if (user) {
          if (user.emailVerified) {
            return true;
          } else {
            this.router.navigateByUrl('/auth/email');
            return false;
          }
        } else {
          this.router.navigateByUrl('/auth');
        }
        return false;
      })
    );
  }

  canDeactivate(
    component: VerifyEmailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    return authState(this.auth).pipe(
      map((user) => {
        if (user) {
          if (user.emailVerified) {
            this.router.navigateByUrl('/');
            return true;
          } else {
            return false;
          }
        } else {
          this.router.navigateByUrl('/auth');
        }
        return false;
      })
    );
  }
}
