import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
 imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
