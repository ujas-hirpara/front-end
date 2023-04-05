import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminpageModule } from './adminpage/adminpage.module';
import { UserpageModule } from './userpage/userpage.module';
import { HttpClientModule } from '@angular/common/http';
import { SigninService } from './signin.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AdminpageModule,
    UserpageModule,
    HttpClientModule
  ],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule { }
