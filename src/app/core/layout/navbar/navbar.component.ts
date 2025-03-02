import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,NgClass, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {      
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
  isScrolling: boolean = false; // افتراضياً، النافبار ليس في حالة التمرير

  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = window.scrollY > 50; // إذا كان التمرير أكثر من 50px
    console.log("Scrolling:", this.isScrolling); // ✅ تحقق من التحديث في Console
  }
  

}
