import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPopup]',
  host: {
    '(click)': 'displayMessage()'
  }
})
export class PopupDirective {
  @Input()message: String;

  constructor(_elementRef: ElementRef) { 
    console.log('Directive bound', _elementRef);
  }

  displayMessage(): void {
    console.log('message: ', this.message);
  }

}

