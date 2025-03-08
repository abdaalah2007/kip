import { OrderService } from './../../../shared/services/order/order.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { response } from 'express';


interface IonLinePayment{
  status:string;
  session:Session

}
interface Session{
  url :string;
  success_url:string;
  cancel_url:string;
}

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  token = JSON.stringify(localStorage.getItem("userToken"))


  submitForm!: FormGroup
  formBuilder = inject(FormBuilder)
  orderService = inject(OrderService)
  activatedRoute = inject(ActivatedRoute)
  Router = inject(Router)


currentCareId!:string
  selectedMethod:string= ''
  ngOnInit(): void {
    this.getCurrentId()
    this.initForm()
  }

  getCurrentId() : void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.currentCareId=res.get('cartId') !
      }
    })

  }
  initForm(): void  {
   this.submitForm = this.formBuilder.group({
        "city": [ null,[Validators.required]],
        "phone": [null,[Validators.required]],
        "details": [null,[Validators.required]]


    });

  }
  onSubmitForm(selectedMethod : string) {
    if(selectedMethod =='Online'){
      this.onLinePayment()
    }else{
      this.cashPayment()
    }
  }
  onLinePayment(){
    this.orderService.onlinePayment(this.currentCareId, this.submitForm.value).subscribe({
      next:(res:IonLinePayment) => {
        window.location.assign(res.session.url)
      }
    })


  }

  cashPayment(){
    this.orderService.cashPayment(this.currentCareId,this.submitForm.value).subscribe({
      next:(res:IonLinePayment) => {
        this.Router.navigate(['/allorders'])
        
      }
    })
  }
 



}
