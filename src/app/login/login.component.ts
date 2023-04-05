import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginData: SigninService, private router: Router) { }
  loginform(data: any) {
    this.loginData.loginUser(data).subscribe(result => {
      if(result.status === "noAuth"){
          alert("Invalid login detail")
      }
      else{
         if(result.Role === "User"){
          this.router.navigate(["user-home",result.Index,"default"])
         }
         else{
          this.router.navigate(["admin-home",result.Index,"admin-default"])
         }
      }

    })

   }
}
