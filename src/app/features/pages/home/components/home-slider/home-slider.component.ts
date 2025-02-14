import { Component, inject, OnInit } from '@angular/core';
import { CategoriesSliderService } from '../../../../../shared/services/categories/categories-slider.service';
import { Category } from '../../../../../shared/interfaces/categories-slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Image } from 'primeng/image';


 

@Component({
  selector: 'app-home-slider', 
  imports: [ CarouselModule,Image ],
  templateUrl: './home-slider.component.html',
  standalone: true,
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent implements OnInit {

  
  _categoriesSliderService=inject(CategoriesSliderService)

  categories!:Category[]

  customOptions: OwlOptions= {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true
  }


    ngOnInit(): void {
       this.getCategories() 
    }
  getCategories(){
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
        }
      })
  }

}
