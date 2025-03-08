import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { ErrorMassageComponent } from "../../../shared/ui/error-massage/error-massage.component";


@Component({
  selector: 'app-log',
  imports: [ReactiveFormsModule, ErrorMassageComponent, RouterLink ],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent implements OnInit {
  apiError!:string
  isCallingAPI: boolean=false
  Subscription:Subscription =new Subscription
  loginForm!:FormGroup 
  toggleInput:boolean=false
  _authService=inject(AuthService)
      _router=inject(Router)

      initForm(){
      this.loginForm =new FormGroup({
          email : new FormControl(null, [Validators.required,Validators.email]),
          password : new FormControl(null, [Validators.required,Validators.pattern(/^[a-z]\w{5,}$/)]),
        });
      }
      ngOnInit(): void {
        this.initForm()
      }
 
      login(){
        this.isCallingAPI=true
        this.Subscription = this._authService.LoginUser(this.loginForm.value).subscribe({
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
