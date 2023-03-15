import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[limit]'
})
export class LimitDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.borderColor = 'black'
    el.nativeElement.style.borderWidth = '1px'
    el.nativeElement.style.borderStyle = 'dashed'
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.width = '400px';
    el.nativeElement.style.lineHeight = '1.3em';
  }
}
