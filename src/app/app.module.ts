import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {AppRoutingModule} from "./app-routing.module";
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { MovieCreateFormComponent } from './movie-create-form/movie-create-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    NavigationBarComponent,
    MovieListComponent,
    SeriesListComponent,
    MovieCreateFormComponent
  ],
    imports: [
      HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
