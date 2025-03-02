import { Category } from './../../interfaces/categories-slider';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  env =environment.baseUrl

  private readonly _httpClient =inject(HttpClient)

  constructor() { }
  getProducts(categoryId?:string) : Observable<any>{
    let url =categoryId? `${this.env}/products?category[in]=${categoryId}`: `${this.env}/products`
  return  this._httpClient.get(url)
  }
  getproductById(id:string):Observable<any>{
    return this._httpClient.get(`${this.env}/products/${id}`)
  }

}
