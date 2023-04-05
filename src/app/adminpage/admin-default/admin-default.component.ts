import { Component } from '@angular/core';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-admin-default',
  templateUrl: './admin-default.component.html',
  styleUrls: ['./admin-default.component.css']
})
export class AdminDefaultComponent {
public productData:any
public note:any
constructor(private showProduct:AdminDataService){}

 ngOnInit(){
    this.showProduct.getProductData().subscribe((data)=>{
      if(!data.length){
        this.note = `No one added product!! click on "add product" to add product.`
      }
      this.productData = data
    })
  }
}
