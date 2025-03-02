import { AnimateOnScroll } from 'primeng/animateonscroll';
import { routes } from './../../../app.routes';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up',
  imports: [ AnimateOnScroll],
  templateUrl: './up.component.html',
  styleUrl: './up.component.scss'
})
export class UpComponent {
isScrolling: boolean = false; // للتحكم في السهم عند التمرير

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = window.scrollY > 100; // إظهار السهم إذا تجاوز التمرير 100px
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // التحرك بسلاسة للأعلى
  }
}
