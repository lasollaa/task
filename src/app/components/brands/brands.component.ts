import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Brands } from 'src/app/core/interface/brands';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{

  constructor(private _ProductService:ProductService){}
  brandsData:Brands[] =[]


  ngOnInit(): void {
    this._ProductService.getbrands().subscribe({
      next:(response)=>{
        this.brandsData = response.data;
      }
    })
  }
}
