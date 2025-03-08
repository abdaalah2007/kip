import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MyTranslateService } from '../../services/myTranslate/my-translate.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,NgClass, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit { 
  private readonly _myTranslateService=inject(MyTranslateService)     
  _authService =inject(AuthService)
  // _router = inject(Router)
  isLoggedIn: any 
  constructor(){}
  ngOnInit(): void {
    this.CheckLogginStatus()
  }
    CheckLogginStatus(){
      this._authService.userData.subscribe({
        next: (data) => {
          this.isLoggedIn = data
          console.log(data, 'navbar');
          
          },
         })
    }
     signOut(){
      this._authService.logOut()
  }
  isScrolling: boolean = false; 

  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = window.scrollY > 50; 
    console.log("Scrolling:", this.isScrolling); 
  }

  change(lang:string):void{
    this._myTranslateService.changeLangTranslate(lang)
  }
  

}
