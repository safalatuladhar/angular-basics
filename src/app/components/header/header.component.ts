import { Component, OnInit } from '@angular/core';
import AuthServiceService from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly authService: AuthServiceService){}
  ngOnInit(): void {
    
  }

  login(): void {
    this.authService.authenticate();  
  }
}