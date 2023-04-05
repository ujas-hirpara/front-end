import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  public admin:any
  public adminIndex:any
  public totalProduct:any
  constructor(private admindata : AdminDataService,private route:ActivatedRoute){}

ngOnInit(){
  this.adminIndex = this.route.parent?.snapshot.params["index"]
  this.admindata.getadminData(this.adminIndex).subscribe((data)=>{
    this.admin = data
  })

  this.admindata.getTotalProduct(this.adminIndex).subscribe(total=>{
    this.totalProduct = total
  })
}

}
