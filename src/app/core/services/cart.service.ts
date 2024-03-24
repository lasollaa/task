import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string =`https://ecommerce.routemisr.com/api/v1/`;


  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);


  addToCart(_proId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `cart`,
    {
      productId: _proId
  } ,
  )}

  getCartUser():Observable<any>{
    return this._HttpClient.get(this.baseUrl+ 'cart',
    )
  }

  removeCartItem(_proId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+ `cart/${_proId}`,
    {
    });
  }

  updateCartCount(_proId:string , countNum:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl + `cart/${_proId}`,
    {
      count: countNum
    },
    )
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl+ `cart`,
  );
  }

  checkOut(cartId:string|null , orderInfo:object):Observable<any>{
    return this._HttpClient.post( this.baseUrl +
       `orders/checkout-session/${cartId}?url=http://localhost:4200` ,
       {
        shippingAddress: orderInfo
      },

  )}


}
