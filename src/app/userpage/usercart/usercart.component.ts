import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent {
  // @ViewChild('box') input: ElementRef<HTMLInputElement>;
  public userIndex: any
  public cartData: any
  public note: any
  public number: number = 1
  public payble:any
  public product:any
  constructor(private route: ActivatedRoute, private userdata: UserDataService) { }

  ngOnInit() {
    this.userIndex = this.route.parent?.snapshot.params["index"]
    this.userdata.getCartProduct(this.userIndex).subscribe((data) => {
      if (!data.length) {
        this.note = `No one product in cart!!!`
      }
      this.cartData = data
    })
    
    this.userdata.fetchproduct().subscribe(productData=>{
      this.product = productData
    })
  }

  increment(index: any, value: string,productId:number,number:string) {

  
    this.userdata.newFindProduct(productId).subscribe(objData=>{

      if (value === "add" && objData[0].Quantity > 0 ) {
        (<HTMLInputElement>document.getElementById(`input_${index}`)).value = String(this.cartData[index].cartQuantity++)
        
      }
      else if(value === "minuse" && this.cartData[index].cartQuantity >= 2){
        (<HTMLInputElement>document.getElementById(`input_${index}`)).value = String(this.cartData[index].cartQuantity--)
      }
     
    })
    // const productPrice = this.cartData[index].Price
    // const count:number = Number(number)
    // this.payble = count*productPrice
    // (<HTMLInputElement>document.getElementById(`p_${index}`)).value == this.payble
    
  }


  add(id: any, number: string,index:any) {
    const productPrice = this.cartData[index].Price
    const count = Number(number)
    this.payble = count*productPrice
    const newData = { id, number,payble:this.payble }
    this.userdata.saveData(newData).subscribe(res => {
      if(res.status === "error"){
        alert("No available this quantity!! Please add less quantity")      
      }
      this.ngOnInit()
    })
  }


  dropCart(_id:any,productId:number){
    this.userdata.dropData(_id,productId).subscribe(res => {
      this.ngOnInit()
    })
  }

}
