import { Message } from './../../../../../node_modules/postcss/lib/result.d';
import { ErrorMassageComponent } from './../../../shared/ui/error-massage/error-massage.component';
import { RecentProductsComponent } from './../home/components/recent-products/recent-products.component';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product/product.service';
import { Prodouct } from '../../../shared/interfaces/prodouct';

import { CommonModule } from '@angular/common';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { UpComponent } from "../../../shared/components/up/up.component";

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, CarouselModule, RecentProductsComponent, UpComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  isLoading:boolean =false
 private readonly _activatedRoute=inject(ActivatedRoute)
 private readonly _productService=inject(ProductService)
 private readonly _cartService=inject(CartService)
 private readonly _toastr=inject(ToastrService)


 

 productDetails!:Prodouct
 recentProducts!:Prodouct[]
 APIError!:string

ngOnInit(): void {
  this.getId()
}
getId(){
  this._activatedRoute.paramMap.subscribe({
    next: (res:any) => {
      this.getDetails(res?.params?.id)
    },error:(err) =>{
      console.log(err)
      this.APIError = err.error.message
    },
  })


}
customOptions: OwlOptions= {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 500,
  navText: ['<i class="fa-solid fa-left fa-beat-fade"></i>', '<i class="fa-solid fa-right fa-beat-fade"></i>'],
items:1,

  nav: true
}
getDetails(id:string){
  this._productService.getproductById(id).subscribe({
    next: (res) => {
      this.productDetails=res.data
      this.getRelatedProducts(this.productDetails.category._id)
    }
  }) 

}

getRelatedProducts(categoryId:string){
  this._productService.getProducts(categoryId).subscribe({
    next: (res) => {
      this.recentProducts= res.data

    }
  })

}
addToCard(id:string){
  this.isLoading =true
  this._cartService.addProductToCart(id).subscribe({
    next: (res) => {
      this._toastr.success(res.message);
      this.isLoading = false


    }
  })
}


}
