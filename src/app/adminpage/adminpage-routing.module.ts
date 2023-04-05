import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDefaultComponent } from './admin-default/admin-default.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes = [
  {
    path: "admin-home/:index",
    component: AdminhomeComponent,
    children: [
      {
        path: "admin-profile",
        component: AdminProfileComponent
      },
      {
        path:"Add-product",
        component : AddProductComponent
      },
      {
        path:"admin-default",
        component : AdminDefaultComponent
      },
      {
        path:"admin-product",
        component:AdminProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
