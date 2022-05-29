import { Injectable } from '@angular/core';
import { AuthData } from './auth-data';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(data: AuthData) {}

  signup(data: UserData) {}

  signInGoogle() {}
}
