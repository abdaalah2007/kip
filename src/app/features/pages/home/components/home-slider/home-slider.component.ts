import { Component, inject, OnInit } from '@angular/core';
import { CategoriesSliderService } from '../../../../../shared/services/categories/categories-slider.service';
import { Category } from '../../../../../shared/interfaces/categories-slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';


 

@Component({
  selector: 'app-home-slider', 
  imports: [ CarouselModule],
  templateUrl: './home-slider.component.html',
  standalone: true,
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent implements OnInit {

  
  _categoriesSliderService=inject(CategoriesSliderService)

  categories!:Category[]
  customOptions: OwlOptions = {
    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    responsive: {
      0:{
        items:2
      },
      400:{
        items:3
      },
      510:{
        items:4
      },
      710:{
        items:5
      },
      810:{
        items:6
      },
      950:{
        items:7
      }
    }
  };
  


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
