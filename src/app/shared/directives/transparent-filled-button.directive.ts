import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransparentFilledButton]',
})
export class TransparentFilledButtonDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      'transparent-filled-btn'
    );
  }
}
