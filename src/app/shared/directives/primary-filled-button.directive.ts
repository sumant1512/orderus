import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrimaryFilledButton]',
})
export class PrimaryFilledButtonDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'primary-filled-btn');
  }
}
