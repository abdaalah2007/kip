import { CanActivateFn,Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export const loggedUserGuard: CanActivateFn = (route, state) => {


 const _pLATFORM_ID=inject(PLATFORM_ID)
 const _router=inject(Router)
 if (isPlatformBrowser(_pLATFORM_ID)){
  if(localStorage.getItem("userToken")){
    _router.navigate(['/home'])
    return false;
  }
  return true;
 }else{
   return false;
 }
};
