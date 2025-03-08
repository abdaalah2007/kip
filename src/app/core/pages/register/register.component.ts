import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { ErrorMassageComponent } from "../../../shared/ui/error-massage/error-massage.component";

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, ErrorMassageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  apiError!:string
  isCallingAPI: boolean=false
  Subscription:Subscription =new Subscription
  registerForm :FormGroup =new FormGroup({
    name : new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email : new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password : new FormControl(null, [Validators.required,Validators.pattern(/^[a-z]\w{5,}$/)]),
    rePassword : new FormControl(null, [Validators.required,Validators.pattern(/^[a-z]\w{5,}$/)]),
    phone : new FormControl(null, [Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.validateRePassword);
  _authService=inject(AuthService)
      _router=inject(Router)
      register(){
        if(this.registerForm.invalid){
          this.registerForm.markAllAsTouched()
        }else{
          this.isCallingAPI=true
          if(this.Subscription)this.Subscription.unsubscribe()
            this.Subscription=this._authService.registerUser(this.registerForm.value).subscribe({
              next: (res) => {

                          console.log(res);
                           this._router.navigate(['/auth/log'])
                           this.isCallingAPI=false

                         },
                         error:(err) => {
                          
                          this.apiError=err.error.message
                          this.isCallingAPI=false
                         },
                         complete:() => {
                
                         }
                         
                      })
        }
        
      }
        validateRePassword(form:AbstractControl){
    const password = form.get('password')?.value
    const rePassword = form.get('rePassword')?.value
    if(password==rePassword){
      return null
    }else{
      return {misMatch:true}
    }
    
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe()
  }

 
}
