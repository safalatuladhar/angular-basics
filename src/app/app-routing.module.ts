import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsWrapperComponent } from './forms/cards-wrapper/cards-wrapper.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: CardsWrapperComponent},
  {path: 'cards', loadChildren: () => import('./forms/cards-wrapper/cards-wrapper.module').then(m => m.CardsWrapperModule)},
  {path: 'periodic-table', loadChildren: () => import('./forms/periodic-table/periodic-table.module').then(m => m.PeriodicTableModule),
   canActivate : [AuthGuard]},
  {path: 'home', loadChildren: ()=> import('./forms/home/home.module').then(m => m.HomeModule)},
  {path: '**', loadChildren: ()=> import('./forms/not-found/not-found.module').then(m => m.NotFoundModule)},


  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }