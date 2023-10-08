import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartDetails:any =null;

constructor(private _CartService:CartService){

}
updateItemCount(productId:string , count:number){
  this._CartService.updateItemCount(productId,count).subscribe({
    next:(response)=>{
      this.cartDetails=response.data;
          console.log(response.data) }  , 
          error:(err)=>console.log(err),
  })
}
removeItem(productId:string){
this._CartService.removecartItem(productId).subscribe({
  next:(response)=>{
this.cartDetails=response.data;
    console.log(response.data) }  , 
  
    error:(err)=>console.log(err),
 
})
}
ngOnInit(): void {
  this._CartService.GetLoggedusercart().subscribe({
    next:(response)=>{
      this.cartDetails= response.data;
      console.log(response.data) }  , 
    
      error:(err)=>console.log(err),
   
  
    

    
  })
}
}
