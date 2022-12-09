import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsWrapperModule } from './cards-wrapper/cards-wrapper.module';
import { PeriodicTableModule } from './periodic-table/periodic-table.module';



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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }