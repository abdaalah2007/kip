import { Component, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandsService } from '../../services/brands.service';
import { Brand } from '../../interfaces/all-orders';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LodingComponent } from "../../../shared/components/loding/loding.component";
import { UpComponent } from "../../../shared/components/up/up.component";

@Component({
  selector: 'app-brands',
  standalone: true, 
  imports: [CommonModule, CarouselModule, LodingComponent, UpComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  isLoading:boolean = true

  _httpClient=inject(HttpClient)
  _brandsService= inject(BrandsService)
    Brand!:Brand[]  
  ngOnInit(): void {
    this.getBrands() 
 }
getBrands(){
  this.isLoading =true
   this._brandsService.getAllBrands().subscribe({
     next: (data) => {
       
       this.Brand = data.data
     },
     complete: () => {
       
       this.isLoading = false
     }
   })
}
}
