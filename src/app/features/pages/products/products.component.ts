import { Component } from '@angular/core';
import { RecentProductsComponent } from "../home/components/recent-products/recent-products.component";
import { LodingComponent } from "../../../shared/components/loding/loding.component";


@Component({
  selector: 'app-products',
  imports: [RecentProductsComponent, LodingComponent,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isLoding!:boolean 

}
