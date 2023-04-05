import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminDefaultComponent } from './admin-default/admin-default.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDataService } from './admin-data.service';
import { FormsModule } from '@angular/forms';
import { AdminProductComponent } from './admin-product/admin-product.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminDefaultComponent,
    AdminProfileComponent,
    AddProductComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[AdminDataService]
})
export class AdminpageModule { }
