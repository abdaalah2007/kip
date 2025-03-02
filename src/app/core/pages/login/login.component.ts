
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //  apiError!:string
    // isCallingAPI: boolean=false
    // loginForm :FormGroup =new FormGroup({
    //   email : new FormControl(null, [Validators.required,Validators.email]),
    //   password : new FormControl(null, [Validators.required,Validators.pattern(/^[a-z]\w{5,}$/)]),

    // })
  
    //     _authService=inject(AuthService)
    //     _router=inject(Router)
  
  
    // login(){
    //   if(this.loginForm.invalid){
    //     this.loginForm.markAllAsTouched() 
    //   }else{
    //     this.apiError=''
    //     this.isCallingAPI=true
    //     if(!this.isCallingAPI){
    //       this.isCallingAPI=true
    //       this._authService.LoginUser(this.loginForm.value).subscribe({
    //         next: (res) => {
    //           console.log(res);
    //           this.isCallingAPI=false
    //            this._router.navigate(['/home'])
    //          },
    //          error:(err) => {
    //           console.log('err')
    //           this.apiError=err.error.message
    //           this.isCallingAPI=false
    //          },
    //          complete:() => {
    
    //          }
    //       })
    //     }
       
    //   }
      
    // }

}
