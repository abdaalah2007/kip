import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'freshcard';

  constructor( private _flowbiteService :FlowbiteService) {
    
   }
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
      
    });
  }
}
