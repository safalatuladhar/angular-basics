import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsWrapperComponent } from '../forms/cards-wrapper/cards-wrapper.component';
import {HomeComponent} from '../forms/home/home.component';

const routes: Routes = [
  
  {path: 'cards', loadChildren: () => import('../cards-wrapper/cards-wrapper.module').then(m => m.CardsWrapperModule)},
  {path: 'periodic-table', loadChildren: () => import('../periodic-table/periodic-table.module').then(m => m.PeriodicTableModule)},
  {path: 'home', loadChildren: ()=> import('../forms/home/home.module').then(m => m.HomeModule)},

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  declarations : [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }