import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {
  public productData:any
  public note:any
  public adminIndex:any
  constructor(private showProduct:AdminDataService,private route:ActivatedRoute){}
  
   ngOnInit(){
    this.adminIndex = this.route.parent?.snapshot.params["index"]
      this.showProduct.getAdminProductData(this.adminIndex).subscribe((data)=>{
        if(!data.length){
          this.note = `No one added product!! click on "add product" to add product.`
        }
        this.productData = data
      })
    }
}
