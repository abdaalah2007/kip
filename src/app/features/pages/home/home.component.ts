import { Component, HostListener } from '@angular/core';
import { RecentProductsComponent } from "./components/recent-products/recent-products.component";
import { HomeHaedarComponent } from "./components/home-haedar/home-haedar.component";
import { HomeSliderComponent } from "./components/home-slider/home-slider.component";
import { UpComponent } from "../../../shared/components/up/up.component";

@Component({
  selector: 'app-home',
  imports: [RecentProductsComponent, HomeHaedarComponent, HomeSliderComponent, UpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  isScrolling: boolean = false; // للتحكم في السهم عند التمرير

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = window.scrollY > 100; // إظهار السهم إذا تجاوز التمرير 100px
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // التحرك بسلاسة للأعلى
  }

}
