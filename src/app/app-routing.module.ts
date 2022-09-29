import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {MovieListComponent} from "./movie-list/movie-list.component";

export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'password-reset', component: PasswordResetComponent},
  {path:'homepage', component: NavigationBarComponent},
  {path:'homepage/series', component: MovieListComponent},
  {path:'homepage/movies', component: MovieListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
