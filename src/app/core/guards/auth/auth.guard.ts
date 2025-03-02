import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { log } from 'console';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
 const _pLATFORM_ID=inject(PLATFORM_ID)
 const _router=inject(Router)

 if (isPlatformBrowser(_pLATFORM_ID)){
  const token = localStorage.getItem('userToken') !;
console.log('userId',(jwtDecode(token) as {id:string}).id);
localStorage.setItem('userId',(jwtDecode(token) as {id:string}).id)


  if(localStorage.getItem("userToken")){
    return true;
  }
  _router.navigate(['/auth/log'])
  return false;
 }else{
   return false;
 }

};
