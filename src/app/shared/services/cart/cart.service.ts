import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartService {
_httpClient=inject(HttpClient)
  env =environment.baseUrl
  token:string = JSON.stringify(localStorage.getItem("userToken")) 

  constructor() { 


  }


  addProductToCart(productId:string):Observable<any>{
   return this._httpClient.post(`${this.env}/cart`,{productId},{
      // headers:{
      //   token:JSON.parse(this.token)
        
      //       }
            
    })
  }

  updateProductQuanitity(productId:string,count:string):Observable<any>{
   return this._httpClient.put(`${this.env}/cart/${productId}`,{count},{
      // headers:{
      //   token:JSON.parse(this.token)
      // }
    })
  }
  getCard():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{
      // headers:{
      //   token:JSON.parse(this.token)
        
      // }
      
    })
  }

  removeSpacificItem(productId:string):Observable<any>{
    return this._httpClient.delete(`${this.env}/cart/${productId}`,{
      //  headers:{
      //    token:JSON.parse(this.token)
         
      //  }
       
     })
   }

  clearCart():Observable<any>{
    return this._httpClient.delete(`${this.env}/cart`,{
      //  headers:{
      //    token:JSON.parse(this.token)
         
      //  }
       
     })
   }
}
