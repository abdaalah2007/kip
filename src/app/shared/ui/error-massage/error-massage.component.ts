import { AbstractControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-massage',
  imports: [],
  templateUrl: './error-massage.component.html',
  styleUrl: './error-massage.component.scss'
})
export class ErrorMassageComponent {
  @Input() nameControl!: AbstractControl | null;

}
