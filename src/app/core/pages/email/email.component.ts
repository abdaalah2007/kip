import { Router } from '@angular/router';
import { User } from './../../../features/interfaces/all-orders';
import { Component, inject, OnInit } from '@angular/core';
import { ErrorMassageComponent } from "../../../shared/ui/error-massage/error-massage.component";
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { AuthUser } from '../../interfaces/auth-user';

@Component({
  selector: 'app-email',
  imports: [ErrorMassageComponent,FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent implements OnInit {
  isCallingAPI: boolean=false
  user:AuthUser;
      loginForm!:FormGroup 
  apiError!:string
  _authService=inject(AuthService)
          _router=inject(Router)

  ngOnInit() :void{
    this.initForm()
  }

      initForm(){
          this.loginForm =new FormGroup({
              email : new FormControl(null, [Validators.required,Validators.email]),
              password : new FormControl(null, [Validators.required,Validators.pattern(/^[a-z]\w{5,}$/)]),
            });
          }
          constructor(){
            this.user = {} as AuthUser
          }
          forgetpassword(){
            if(this.user.email && this.user.email.length > 0){
              this._router.navigate(['/auth/forget-password'],
                {queryParams:{'email':this.user.email}
              })
            }
          }

}
