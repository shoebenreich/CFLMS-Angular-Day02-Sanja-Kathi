import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TeamComponent } from './team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCarsFormComponent } from './add-cars-form/add-cars-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    KontaktComponent,
    TeamComponent,
    AddCarsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
