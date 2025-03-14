import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  env=environment.baseUrl
  _httpClient=inject(HttpClient)
  constructor() { }

    getAllBrands() : Observable<any>{
      return this._httpClient.get(`${this.env}/brands`)
    }
}
