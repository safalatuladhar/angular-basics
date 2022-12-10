import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsWrapperComponent } from './cards-wrapper.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
  {path: '', component: CardsWrapperComponent}
];

@NgModule({
  declarations: [
    CardsWrapperComponent,
    CardsComponent,
  ],
  imports: [
    // CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CardsWrapperModule { }