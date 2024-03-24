import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { product } from 'src/app/core/interface/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{

  constructor(private _WishlistService:WishlistService,
    private _ToastrService:ToastrService,
    private _CartService:CartService){}

  products: product[] = [];

  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        console.log(response);
        this.products = response.data;
      }
    })
  }

  addFav(proId:any):void{

    this._WishlistService.addToWishList(proId).subscribe({
     next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);

     }
    })
  }

  removeFav(proId:any):void{
    this._WishlistService.removeWishList(proId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
        this._WishlistService.getWishList().subscribe({
          next:(response)=>{
            this.products = response.data;
          }
        })
      }
    })

  }

  addProduct(id:any):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        console.log(response.message);

        this._ToastrService.success(response.message);

        this._CartService.cartNumber.next(response.numOfCartItems)
      }
    })
  }

}
