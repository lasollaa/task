import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interface/category';

@Component({
  selector: 'app-catdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catdetails.component.html',
  styleUrls: ['./catdetails.component.scss']
})
export class CatdetailsComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService){}
  categoryId:string|null = '';
  categoryDetails:Category = {
    name: '',
    image: ''
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.categoryId = params.get('id')
      }
    });

    this._ProductService.getcategorydeatails(this.categoryId).subscribe({
      next:(response)=> {
 
        this.categoryDetails = response.data;
      }
    })

  }
}
