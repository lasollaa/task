import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interface/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe ,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

 constructor(private _ProductService:ProductService,
  private _CartService:CartService,
  private _ToastrService:ToastrService,
  private _WishlistService:WishlistService){}

 products: product[] = [];
 wishListData:string[] =[];
 term:any =''



 ngOnInit(): void {
  this._ProductService.getProduct().subscribe({
    next:(response)=>{
      console.log('products', response.data);
      this.products = response.data;

    },
  });
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

addFav(proId:any):void{

  this._WishlistService.addToWishList(proId).subscribe({
   next:(response)=>{
    console.log(response);
    this._ToastrService.success(response.message);
    this.wishListData = response.data;

   }
  })
}
}
