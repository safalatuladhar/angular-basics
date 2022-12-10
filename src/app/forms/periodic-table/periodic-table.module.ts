import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicTableComponent } from './periodic-table.component';
import { DataGridComponent } from '../../components/data-grid/data-grid.component';
import { MaterialModule } from '../../material/material.module';
import AuthServiceService from 'src/app/service/auth-service.service';


const routes: Routes = [
  {path: '', component: PeriodicTableComponent}
];

@NgModule({
  declarations: [
  PeriodicTableComponent,
  DataGridComponent
  ],
  providers: [AuthServiceService],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PeriodicTableModule { }