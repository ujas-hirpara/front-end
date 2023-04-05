import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private userdata: SigninService, public router: Router) { }
  ngOnInit() {
    // this.userdata.getData().subscribe(data => console.log(data))
  }

  postData(data: any) {
    this.userdata.postUser(data).subscribe(result => {
      if (result.message === "email not valid") {
          alert("Please enter valid email")
      }
      else if (result.message === "email already exist") {
          alert("Email already exist")
      }
      else {
        if (result.Role === "Admin") {
          this.router.navigate(["admin-home", result.Index, "admin-default"])
        }
        else {
          this.router.navigate(["user-home", result.Index, "default"])
        }
      }
    })


  }
}
