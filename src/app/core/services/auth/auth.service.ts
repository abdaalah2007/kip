import {environment} from './../../../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Injectable, inject, input, PLATFORM_ID, afterNextRender} from '@angular/core';
import {AuthUser, LoginUser} from '../../interfaces/auth-user';
import {BehaviorSubject, Observable} from 'rxjs';
import {log} from 'console';
import {jwtDecode} from 'jwt-decode'
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  _httpClient = inject(HttpClient)
  _router = inject(Router)
  _PLATFORM_ID = inject(PLATFORM_ID)
  env = environment.baseUrl

  constructor() {

    afterNextRender(() => {
      this.isLoggedInUser()
    })
  }

  registerUser( userInfo: AuthUser ): Observable<any> {
    return this._httpClient.post(`${this.env}/auth/signup`, userInfo)
  }

  LoginUser( userInfo: LoginUser ): Observable<any> {
    return this._httpClient.post(`${this.env}/auth/signin`, userInfo)
  }

  saveUser() {
    if (localStorage.getItem("userToken")) {
      this.userData.next(jwtDecode(localStorage.getItem("userToken")!))
      console.log(this.userData);
    }

  }

  logOut() {
    localStorage.removeItem("userToken")
    this.userData.next(null)
    this._router.navigate(['/auth/log'])
  }

  isLoggedInUser(): boolean {
    if (localStorage.getItem("userToken")!) {
      this.userData.next(localStorage.getItem("userToken"))
      return true
    } else {
      this.userData.next(null)
      return false
    }

  }

  forgotPassword(data:any): Observable<any> {
    return this._httpClient.post(`${this.env}/auth/forgotPasswords`, data)
  }

  verifyResetCode(code:number): Observable<any> {
    return this._httpClient.post(`${this.env}/auth/verifyResetCode`, {resetCode: `${code}`})
  }
  resetPassword(data:{}): Observable<any> {
    return this._httpClient.put(`${this.env}/auth/resetPassword`, data)
  }
}
