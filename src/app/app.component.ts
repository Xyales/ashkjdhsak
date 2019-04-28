import { Component } from '@angular/core';
import { AuthService } from "./shared/services/auth.service";
import { faCoffee, faListUl, faUser, faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NG-Firebase';
  faCoffee = faCoffee;
  faListUL = faListUl;
  faUser = faUser;
  faBars = faBars;
  faSignOutAlt = faSignOutAlt;

    constructor(
      public authService: AuthService
    ) { }
}
