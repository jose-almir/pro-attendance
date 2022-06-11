import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private readonly errorsMap: Record<string, string> = {
    'auth/user-not-found': 'Usuário não encontrado',
    'auth/popup-closed-by-user': 'Ação cancelada',
    'auth/email-already-in-use': 'Email já está em uso',
    'auth/wrong-password': 'Senha incorreta'
  };

  get(code: string) {
    return this.errorsMap[code];
  }
}
