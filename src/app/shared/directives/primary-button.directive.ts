import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrimaryButton]',
})
export class PrimaryButtonDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'primary-btn');
  }
}
