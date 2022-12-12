import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import AuthServiceService from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  
  private subscription: Subscription;

  constructor(private readonly authService: AuthServiceService){}
  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$$.subscribe(val => this.isLoggedIn = val);
  }

  login(): void {
     this.authService.isLoggedIn$$.next(true);
  }

  logout(): void {
    this.authService.isLoggedIn$$.next(false);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}