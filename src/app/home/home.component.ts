import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any[]=[];
  constructor(private _ProductsService:ProductsService ,private _CartService:CartService){

  }

addTocart(productId:string){
  this._CartService.addTocart(productId).subscribe({
    next:(response)=> {
      this._CartService.numOfCartItems.next(response.numOfCartItems)
      console.log(response)
    },
    error:(err)=>console.log(err),
    
    
  })
}
ngOnInit(): void {
  this._ProductsService.getProducts().subscribe({
    next:(Response)=> this.products = Response.data
  })
}
}

