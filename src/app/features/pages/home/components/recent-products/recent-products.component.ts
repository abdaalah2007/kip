import { RatingModule } from 'primeng/rating';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AnimateOnScroll } from 'primeng/animateonscroll';

// import { Component, inject, OnInit } from '@angular/core';
// import { ProductService } from '../../../../../shared/services/product/product.service';

// @Component({
//   selector: 'app-recent-products',
//   imports: [],
//   templateUrl: './recent-products.component.html',
//   styleUrl: './recent-products.component.scss',
// })
// export class RecentProductsComponent implements OnInit {
//  private readonly _ProductService=inject(ProductService)

//  ngOnInit(): void {
//     this.getProducts();

//   }
//  }

//  getProducts(){
//     this._ProductService.getProducts().subscribe
//       next: (res) => {
//         console.log(res);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//       complete: () =>  {
//         console.log('completed');
//       },

//     })


//   }


// ////////////////////////////////////////////////////////
import { Component, inject, OnInit } from '@angular/core';
// import { RatingModule } from 'primeng/rating';

import { ProductService } from '../../../../../shared/services/product/product.service';
import { Prodouct } from '../../../../../shared/interfaces/prodouct';
import { input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { LodingComponent } from "../../../../../shared/components/loding/loding.component";
import { SearchPipe } from '../../../../../shared/pipes/search.pipe';

@Component({
  selector: 'app-recent-products',
  imports: [
    SearchPipe,
    RouterLink,
    DataView,
    Tag,
    RatingModule,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule,
    AnimateOnScroll,
    LodingComponent
],
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.scss'],

})


export class RecentProductsComponent implements OnInit {
  isLoading:boolean = true
    layout: 'list' | 'grid' = 'grid';
  options = ['list', 'grid'];
  prodoucts!: Prodouct[] ;
  private readonly _ProductService = inject(ProductService);
  private readonly _cartService = inject(CartService);
   private readonly _toastr=inject(ToastrService)
   mytitle:string =''



  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading =true
    this._ProductService.getProducts().subscribe({
      next: (data:any) => {
        this.prodoucts = data.data;
        console.log(this.prodoucts);


      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
        this.isLoading =false

      }

    })
   }
   addToCart(id:string , load:HTMLButtonElement){
    let isLoading:HTMLButtonElement = load
     isLoading.disabled =true
    this._cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._toastr.success(res.message);
        isLoading.disabled =false



      }
    })
   }






}




