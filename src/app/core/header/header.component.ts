import { Component, OnInit } from '@angular/core';
import {
  faArrowRightFromBracket,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active = false;
  faLogout = faArrowRightFromBracket;
  faUser = faUserAlt;

  logged$?: Observable<boolean>;

  constructor(private authService: AuthService) {}

  get user() {
    return this.authService.currentUser;
  }

  logout() {
    this.authService.logout().subscribe();
  }

  ngOnInit(): void {
    this.logged$ = this.authService.logged;
  }
}
