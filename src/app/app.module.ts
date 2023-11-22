import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementsComponent } from './vetements/vetements.component';
import { FormsModule } from '@angular/forms';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { UpdateVetementsComponent } from './update-vetements/update-vetements.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    VetementsComponent,
    AddVetementsComponent,
    UpdateVetementsComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
