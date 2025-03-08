import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { AuthUser } from '../../interfaces/auth-user';
import { Subscription } from 'rxjs';
import { ErrorMassageComponent } from "../../../shared/ui/error-massage/error-massage.component";

@Component({
  selector: 'app-forget-password',
  imports: [FormsModule, ReactiveFormsModule, ErrorMassageComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  apiError!:string
  isCallingAPI: boolean=false
  Subscription:Subscription =new Subscription
  toggleInput:boolean=false
  _authService=inject(AuthService)
  _router=inject(Router)
  step1Show:boolean=true;
  step2Show:boolean=false;
  step3Show:boolean=false;
  step1:FormGroup =new FormGroup({
      email : new FormControl(null, [Validators.required,Validators.email]),
  });
  
  step2:FormGroup =new FormGroup({
    resetCode : new FormControl(null, [Validators.required]),
  });

  step3:FormGroup =new FormGroup({
    email : new FormControl(null, [Validators.required,Validators.email]),
    newPassword : new FormControl(null, [Validators.required,Validators.pattern(/^[a-z]\w{5,}$/)]),
  });

      
      
      ngOnInit(): void {

      }
 
      step1Submite(){
        this.isCallingAPI=true
        this.Subscription = this._authService.forgotPassword(this.step1.value).subscribe({
          next: (res) => {
            this.isCallingAPI=false
            this.step1Show=false;
            this.step2Show=true;
            this.step3Show=false;
          } ,
          error:(err) => {
            this.apiError=err.error.message
            this.isCallingAPI=false
          },
          complete:() => {
            
          }
        })

      }
      
      step2Submite(){
        this.isCallingAPI=true
        this.Subscription = this._authService.verifyResetCode(this.step2.controls['resetCode'].value).subscribe({
          next: (res) => {
            this.isCallingAPI=false
            this.step1Show=false;
            this.step2Show=false;
            this.step3Show=true;
          } ,
          error:(err) => {
            this.apiError=err.error.message
            this.isCallingAPI=false
          },
          complete:() => {
            
          }
        })

      }
      
      step3Submit(){
        this.isCallingAPI=true
        this.Subscription = this._authService.resetPassword(this.step3.value).subscribe({
          next: (res) => {
            
            this.isCallingAPI=false
            localStorage.setItem("userToken",res.token)
            this._authService.saveUser()
            this._router.navigate(['/home'])
          } ,
          error:(err) => {
            
            this.apiError=err.error.message
            this.isCallingAPI=false
          },
          complete:() => {
            
          }
        })

      }
      togglePassword(){
        this.toggleInput=!this.toggleInput
      }
      ngOnDestroy(): void {
        this.Subscription.unsubscribe()
      }
}
