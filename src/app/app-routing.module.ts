import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'password-reset', component: PasswordResetComponent},
  {path:'homepage', component: HomepageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
