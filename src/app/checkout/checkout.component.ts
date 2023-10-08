import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private _CartService:CartService){

  }
  shippingAddress:FormGroup =new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null),
  });
navegateTopage(url:string){
window.location.href=url;
}


  
  handleSubmit(shippingAddress:FormGroup){
console.log(shippingAddress.value);
this._CartService.onlinepayment(shippingAddress.value ,"6520600f82dcc200345f0542").subscribe({
  next:(response:any)=>{
    this.navegateTopage(response.session.url)
  
  },

  
})
  }
}
