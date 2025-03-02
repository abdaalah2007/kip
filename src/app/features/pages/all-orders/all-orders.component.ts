import { AllOrders } from './../../interfaces/all-orders';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { OrderService } from '../../../shared/services/order/order.service';
import { CurrencyPipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  imports: [CurrencyPipe],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  _orderService=inject(OrderService)
  _PLATFORM_ID=inject(PLATFORM_ID)
  allOrders!:AllOrders[]

  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders() : void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      const userId = localStorage.getItem('userId') as string
      this._orderService.getAllOrders( userId ).subscribe({
        next: (response) => {
          console.log(response);
          this.allOrders = response;
        }
  
      })
    }
    }

}
 
