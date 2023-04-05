import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ProfileComponent } from './profile/profile.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {
    path:"user-home/:index",
    component:UserhomeComponent,
    children:[
      {
        path:"user-cart",
        component:UsercartComponent
      },
      {
        path:"default",
        component:DefaultComponent
      },
      {
        path:"user-profile",
        component:ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
