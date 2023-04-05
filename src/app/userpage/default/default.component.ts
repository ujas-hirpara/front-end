import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  public productData:any
  public note:any
  public userIndex:any
  constructor(private showProduct:UserDataService,private route:ActivatedRoute,private router:Router){}
  
   ngOnInit(){
      this.showProduct.getProductData().subscribe((data)=>{
        if(!data.length){
          this.note = `No one product!!!`
        }
        this.productData = data
      })
    }
    
    addCart(id:any){
      this.userIndex = this.route.parent?.snapshot.params["index"]
      const cartData =  {id,Index:this.userIndex}
      this.showProduct.postCartProduct(cartData).subscribe((result)=>{
        if(result.sameProduct===1){
          alert(`Product already added!! click the "cart" button to show product`)
        }
        else{
            this.router.navigateByUrl(`/user-home/${this.userIndex}/user-cart`)
        }
      })
    }
}
