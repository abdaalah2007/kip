import { AnimateOnScroll } from 'primeng/animateonscroll';
import { routes } from './../../../app.routes';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up',
  imports: [ ],
  templateUrl: './up.component.html',
  styleUrl: './up.component.scss'
})
export class UpComponent {
isScrolling: boolean = false;   

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = window.scrollY > 100; 
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
