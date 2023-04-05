import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminpage/adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UserhomeComponent } from './userpage/userhome/userhome.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:"",
    component:WelcomeComponent
  },
  {
    path:"signin",
    component:SigninComponent,
  },
  {
    path:"admin-home/:index",
    component:AdminhomeComponent
  },
  {
    path:"user-home/:index",
    component:UserhomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
