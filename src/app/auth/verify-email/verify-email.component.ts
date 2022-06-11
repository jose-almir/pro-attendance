import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { first, interval, Observable, Subscription, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
  sent = false;
  faEmail = faEnvelope;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this.sent = sessionStorage.getItem('sent') != null;

    // if (!this.sent) {
    //   this.authService.emailVerification().subscribe({
    //     next: (wasSent) => {
    //       if (wasSent) {
    //         this.sent = true;
    //         sessionStorage.setItem('sent', '1');
    //       }
    //     },
    //   });
    // }
  }

  ngOnDestroy(): void {}
}

/**
 * TODO WEEKEND
 * - [ ] Garantir que o usuário é deslogado automaticamente após 5 minutos
 * - [ ] Verificar se o usuário está com o email verificado
 * - [ ] Garantir que o fluxo do usuário está coerente
 *  - Cria conta > Email verificar > Verifica > Vai para /
 *  ou
 *  - Cria conta > Email verificar > Não verifica > Deslogado
 *  O mesmo fluxo para login.
 */
