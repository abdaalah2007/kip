import { Category } from '../../interfaces/all-orders';
import { CategoriesSliderService } from './../../../shared/services/categories/categories-slider.service';
import { Component, inject } from '@angular/core';
import { LodingComponent } from "../../../shared/components/loding/loding.component";

@Component({
  selector: 'app-categories',
  imports: [LodingComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  isLoding:boolean = true

  _categoriesSliderService=inject(CategoriesSliderService)
    categories!:Category[]
    ngOnInit(): void {
      this.getCategories() 
   }
 getCategories(){
  this.isLoding =true
     this._categoriesSliderService.getAllCategories().subscribe({
       next: (data) => {
         console.log(data.data)
         this.categories = data.data
       },
       error: (err) => {
         console.log(err)
       },
       complete: () => {
         console.log('Complete')
         this.isLoding = false
       }
     })
 }



}
