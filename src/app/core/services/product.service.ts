import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _HttpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`

  getcategory():Observable<any>{

    return this._HttpClient.get(this.baseUrl + `categories`)
  }
  getcategorydeatails(id:any):Observable<any>{

    return this._HttpClient.get(this.baseUrl + `categories/${id}`)
  }

  getbrands():Observable<any>{

    return this._HttpClient.get(this.baseUrl + `brands`)
  }

  getProduct():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'products')
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'categories')
  }

  getProductDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `products/${id}`);
  }


}
