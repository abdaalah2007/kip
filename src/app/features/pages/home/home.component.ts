import { Component } from '@angular/core';
import { RecentProductsComponent } from "./components/recent-products/recent-products.component";
import { HomeHaedarComponent } from "./components/home-haedar/home-haedar.component";
import { HomeSliderComponent } from "./components/home-slider/home-slider.component";

@Component({
  selector: 'app-home',
  imports: [RecentProductsComponent, HomeHaedarComponent, HomeSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
