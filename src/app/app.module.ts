import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsWrapperModule } from './forms/cards-wrapper/cards-wrapper.module';
import { PeriodicTableModule } from './forms/periodic-table/periodic-table.module';
import { HomeModule } from './forms/home/home.module';
import { ErrorModule } from './error/error.module';
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () => import('./forms/cards-wrapper/cards-wrapper.module').then(m => m.CardsWrapperModule)
  },
  {
    path: 'periodic-table',
    loadChildren: () => import('./forms/periodic-table/periodic-table.module').then(m => m.PeriodicTableModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CardsWrapperModule,
    PeriodicTableModule,
    HomeModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }