import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { json } from 'stream/consumers';
import { JsonPipe } from '@angular/common';
import { AllOrders } from '../../../features/interfaces/all-orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token = JSON.stringify(localStorage.getItem("userToken"))
   env =environment.baseUrl
  private readonly _httpClient=inject(HttpClient)
  constructor() { }

 

  getAllOrders(id:string){
    return this._httpClient.get<AllOrders[]>(`${this.env}/orders/user/${id}`)

  }
  onlinePayment(id:string, userDetails:{}):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
    {
        shippingAddress:userDetails,     
    },
    // {headers:{
    //   token:JSON.parse(this.token)
    // }}
    )
  }
  cashPayment(id:string, userDetails:{}):Observable<any>{
    return this._httpClient.post(`${this.env}/orders/${id}`,
    {
      shippingAddress:userDetails,
    },
    // {
    //   headers:{
    //   token:JSON.parse(this.token)
    // }}
    )
    
  }

}
