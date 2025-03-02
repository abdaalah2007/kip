import { CommonModule } from '@angular/common';
import { Cart } from '../../../shared/interfaces/cart';
import { CartService } from './../../../shared/services/cart/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { count } from 'console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  CartDetails!: Cart;
  isLoading: boolean = true;
  emptyCart: boolean = false; 
  private readonly _cartService=inject(CartService)
  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this._cartService.getCard().subscribe({
      next: (res) => {
        console.log(res)
        this.CartDetails = res
        this.isLoading = false
      }
    })
  }
  removeItem(id: string){
    this.isLoading = true
    this._cartService.removeSpacificItem(id).subscribe({
      next: (res) => {
        console.log(res)
        this.CartDetails = res
        this.isLoading = false
        
      }
    })
      
  }
  updateCart(id:string,count:number){
    this.isLoading = true
    this._cartService.updateProductQuanitity(id,`${count}`).subscribe({
      next: (res) => {
        console.log(res)
        this.CartDetails = res
        this.isLoading = false
      }
    })
  }
  clareCart(){
    this.isLoading = true
    this._cartService.clearCart().subscribe({
      next: (res) => {
        console.log(res)
        this.isLoading = false
        if(res.message == "success"){
          this.CartDetails = {} as Cart
          this.emptyCart = true

        }
      }
    })
  }
}


