import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems= new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) {
    this.GetLoggedusercart().subscribe({

      next:(response)=>{
this.numOfCartItems.next(response.numOfCartItems)
        console.log(response)},
       error:(error)=> console.log(error),     
    })
   } 
  headers:any ={
    token: localStorage.getItem('userToken')
  }
addTocart(productId: string): Observable<any>
{
return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart` ,
{productId:productId} ,
)
}
GetLoggedusercart():Observable<any>
{
return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart` ,
 
)
}
removecartItem(productId:string):Observable<any>
{
return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}` ,
 )
}
updateItemCount(productId:string, count:number):Observable<any>
{
return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}` ,{
count:count
},
 )
}

onlinepayment(shippingAddress:any , cartId:string){
  return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` ,
  {

      shippingAddress:shippingAddress
},
 )
}

}