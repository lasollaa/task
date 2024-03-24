import {Component,  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [


  {path:'', 
  canActivate:[authGuard]
  , loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home' , loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent), title:'home'},
    {path:'cart' , loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent), title:'cart'},
    {path:'wishlist' , loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent), title:'wishlist'},
    {path:'products' , loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent), title:'product'},
    {path:'productdetails/:id' , loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent), title:'details'},
    {path:'brands' , loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent), title:'brands'},
    {path:'allorders' , loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent), title:'allorders'},
    {path:'forgetpassword' , loadComponent:()=>import('./components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent), title:'forgetpassword'},
    {path:'payment/:id' , loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent), title:'payment'},
    {path:'categories' , loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent), title:'categories'},
    {path:'categoriesdetails/:id' , loadComponent:()=>import('./components/catdetails/catdetails.component').then((m)=>m.CatdetailsComponent), title:'categoriesDetails'},

    
  ]},

  {path:'', loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'' , redirectTo:'login' ,pathMatch:'full'},
    {path:'login', loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'login'},
    {path:'register', loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'register'},
    {path:'forgotpassword' , loadComponent:()=>import('./components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent), title:'forgetpassword'},

  ]},
  
  {path:'**', loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent) , title:'notfound'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
