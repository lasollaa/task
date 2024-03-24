import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import {product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interface/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CuttextPipe , CarouselModule , RouterLink, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductService:ProductService ,
     private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService){}
  
  products: product[] = [];
  categories: Category[] = [];
  wishListData:string[] =[];

  term:string =''


  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next:(response)=>{
        console.log('products', response.data);
        this.products = response.data;

      },
    });

    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        console.log('categories',response);
        this.categories = response.data;
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

  addFav(proId:any):void{

    this._WishlistService.addToWishList(proId).subscribe({
     next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);
      this.wishListData = response.data;

     }
    })
  }

  removeFav(proId:any):void{
    this._WishlistService.removeWishList(proId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data
      },
    })

  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  mainslideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }
}

