"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[691],{9691:(O,r,c)=>{c.r(r),c.d(r,{DetailsComponent:()=>v});var n=c(6814),a=c(756),t=c(4769),u=c(1120),l=c(0),d=c(6286),p=c(2425);function m(s,_){if(1&s&&t._UZ(0,"img",13),2&s){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function g(s,_){1&s&&(t.ynx(0),t.YNc(1,m,1,1,"ng-template",12),t.BQk())}function D(s,_){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,g,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span"),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p"),t._UZ(18,"i",10),t._uU(19),t.qZA()()(),t.TgZ(20,"button",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addProduct(i.productDetails._id))}),t._uU(21,"+Add To Cart"),t.qZA()()()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productDetailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.categories),t.xp6(3),t.Oqu(t.xi3(16,7,e.productDetails.price,"EGP")),t.xp6(4),t.Oqu(e.productDetails.ratingsAverage)}}let v=(()=>{class s{constructor(e,o,i,x,h){this._ActivatedRoute=e,this._ProductService=o,this._Renderer2=i,this._CartService=x,this._ToastrService=h,this.productDetails=null,this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id")}}),this._ProductService.getProductDetails(this.productId).subscribe({next:({data:e})=>{this.productDetails=e}})}addProduct(e){this._CartService.addToCart(e).subscribe({next:o=>{console.log(o),console.log(o.message),this._ToastrService.success(o.message),this._CartService.cartNumber.next(o.numOfCartItems)}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(u.gz),t.Y36(l.M),t.Y36(t.Qsj),t.Y36(d.N),t.Y36(p._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-3 mb-4 my-5",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-3","mb-4","my-5"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"small","text-muted"],[1,"d-flex","align-items-center","justify-content-between","my-4"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100",3,"click"],["carouselSlide",""],[1,"w-100",3,"src"]],template:function(o,i){1&o&&t.YNc(0,D,22,10,"section",0),2&o&&t.Q6J("ngIf",i.productDetails)},dependencies:[n.ez,n.sg,n.O5,n.H9,a.bB,a.Fy,a.Mp]})}return s})()}}]);