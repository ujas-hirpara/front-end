import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { DefaultComponent } from './default/default.component';
import { ProfileComponent } from './profile/profile.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataService } from './user-data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    ProfileComponent,
    UsercartComponent,
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[UserDataService]
})
export class UserpageModule { }
