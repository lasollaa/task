import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  userInfo:any;

  baseUrl:string= `https://ecommerce.routemisr.com/api/v1/auth/`

  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +`signup` , userData)
  }

  login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +`signin` , userData)
  }


  decodeUser():void{

    const encode = localStorage.getItem('stoken')
    if( encode !== null){
  
      const decode = jwtDecode(encode);

      this.userInfo = decode;
      console.log(decode);
  
    }
  }
}



