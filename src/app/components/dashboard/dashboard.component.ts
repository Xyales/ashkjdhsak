import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private location: Location,public authService: AuthService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}

