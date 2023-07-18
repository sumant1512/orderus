import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDangerButton]',
})
export class DangerButtonDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'danger-btn');
  }
}
