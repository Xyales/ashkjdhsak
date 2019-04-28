import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }
  faRedoAlt = faRedoAlt;
}