import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styles: [
  ]
})
export class ProductdetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){

}
ProductDetails:any;
Productid:any;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.Productid=params.get('id')
  });
this._ProductsService.getproductdetails(this.Productid).subscribe({
  next:(response)=>this.ProductDetails=response.data
  
})

}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },

  },
  nav: true
}
}