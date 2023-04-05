import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

public adminIndex:any
constructor(private adminService:AdminDataService,private route:ActivatedRoute){}

  addProduct(productdata:any){
    this.adminIndex = this.route.parent?.snapshot.params["index"]
    productdata.adminId = this.adminIndex
    this.adminService.postProduct(productdata).subscribe((result)=>{
     if(result.status === "error"){
       alert("invalid details")
    }
    else{
      alert("product added successfully")
     }
    })
  }
}
