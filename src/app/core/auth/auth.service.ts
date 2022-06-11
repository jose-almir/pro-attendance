import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from '@firebase/auth';
import { first, from, map, Observable, of, tap } from 'rxjs';
import { AuthData } from './auth-data';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  currentUser: User | null = null;

  get logged(): Observable<boolean> {
    return authState(this.auth).pipe(
      tap((user) => (this.currentUser = user)),
      map((user) => user !== null)
    );
  }

  login(data: AuthData) {
    return from(
      signInWithEmailAndPassword(this.auth, data.email, data.password)
    ).pipe(tap(() => this.router.navigateByUrl('/')));
  }

  signup(data: UserData) {
    return from(
      createUserWithEmailAndPassword(this.auth, data.email, data.password)
    ).pipe(
      tap((credentials) =>
        updateProfile(credentials.user, { displayName: data.displayName })
      ),
      tap(() => this.router.navigateByUrl('/'))
    );
  }

  signInGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ hd: 'soulcodeacademy.org' });

    return from(signInWithPopup(this.auth, provider)).pipe(
      tap(() => this.router.navigateByUrl('/'))
    );
  }

  logout() {
    return from(this.auth.signOut()).pipe(
      tap(() => {
        this.currentUser = null;
        this.router.navigate(['/auth/login']);
      })
    );
  }

  emailVerification() {
    return authState(this.auth).pipe(
      first(),
      map((user) => {
          from(sendEmailVerification(user!));
      })
    );
  }

  resetPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email));
  }
}
