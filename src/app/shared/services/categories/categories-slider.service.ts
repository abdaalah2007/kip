import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoriesSliderService {
  env=environment.baseUrl
_httpClient=inject(HttpClient)
  constructor() { }
  getAllCategories() : Observable<any>{
    return this._httpClient.get(`${this.env}/categories`)
  }

}
