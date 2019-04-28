import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }
  faGooglePlusG = faGooglePlusG;

}