import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public user:any
  public userIndex:any
  constructor(private userdata : UserDataService,private route:ActivatedRoute){}

ngOnInit(){
  this.userIndex = this.route.parent?.snapshot.params["index"]
  this.userdata.getData(this.userIndex).subscribe((data)=>{
    this.user = data
  })
}

}
