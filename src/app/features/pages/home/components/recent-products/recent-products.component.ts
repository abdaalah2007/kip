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
import { ProductService } from '../../../../../shared/services/product/product.service';
import { Prodouct } from '../../../../../shared/interfaces/prodouct';
import { input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-recent-products',
  imports: [
        DataView,
        Tag,
        Rating,
        ButtonModule,
        CommonModule,
        SelectButton,
        FormsModule
  ],
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.scss']
})
export class RecentProductsComponent implements OnInit {
    layout: string = "grid";
  options = ['list', 'grid'];
  prodoucts!: Prodouct[] ;
  private readonly _ProductService = inject(ProductService);

  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts() {
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
      }

    })
   }

   

  
    

}




 