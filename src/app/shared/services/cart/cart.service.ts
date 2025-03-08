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

})
  }

  updateProductQuanitity(productId:string,count:string):Observable<any>{
   return this._httpClient.put(`${this.env}/cart/${productId}`,{count},{
 
    })
  }
  getCard():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{
 
      
    })
  }

  removeSpacificItem(productId:string):Observable<any>{
    return this._httpClient.delete(`${this.env}/cart/${productId}`,{
  
       
     })
   }

  clearCart():Observable<any>{
    return this._httpClient.delete(`${this.env}/cart`,{

       
     })
   }
}
// import { Observable, map } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { environment } from '../../../environments/environments';
// import { TranslateService } from '@ngx-translate/core'; // ✅ استيراد TranslateService

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private _httpClient = inject(HttpClient);
//   private translate = inject(TranslateService); // ✅ استخدام inject للحصول على TranslateService
//   private env = environment.baseUrl;

//   constructor() {}

//   /** ✅ إضافة منتج إلى السلة */
//   addProductToCart(productId: string): Observable<any> {
//     return this._httpClient.post(`${this.env}/cart`, { productId }).pipe(
//       map(response => this.translateResponse(response))
//     );
//   }

//   /** ✅ تحديث كمية المنتج في السلة */
//   updateProductQuantity(productId: string, count: number): Observable<any> {
//     return this._httpClient.put(`${this.env}/cart/${productId}`, { count }).pipe(
//       map(response => this.translateResponse(response))
//     );
//   }

//   /** ✅ جلب بيانات السلة */
//   getCart(): Observable<any> {
//     return this._httpClient.get(`${this.env}/cart`).pipe(
//       map(response => this.translateResponse(response))
//     );
//   }

//   /** ✅ إزالة منتج معين من السلة */
//   removeSpecificItem(productId: string): Observable<any> {
//     return this._httpClient.delete(`${this.env}/cart/${productId}`).pipe(
//       map(response => this.translateResponse(response))
//     );
//   }

//   /** ✅ تفريغ السلة بالكامل */
//   clearCart(): Observable<any> {
//     return this._httpClient.delete(`${this.env}/cart`).pipe(
//       map(response => this.translateResponse(response))
//     );
//   }

//   /** ✅ دالة لترجمة البيانات المستلمة من الـ API */
//   private translateResponse(response: any): any {
//     if (!response || typeof response !== 'object') return response;

//     // ترجمة أسماء المنتجات إذا كانت موجودة
//     if (response.products) {
//       response.products = response.products.map((product: any) => ({
//         ...product,
//         name: this.translate.instant(`products.${product.name}`, { defaultValue: product.name })
//       }));
//     }

//     // ترجمة الرسائل العامة
//     if (response.message) {
//       response.message = this.translate.instant(`messages.${response.message}`, { defaultValue: response.message });
//     }

//     return response;
//   }
// }

