import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() isFilled: boolean = false;
  @Output() btnClick = new EventEmitter<boolean>();

  emitBtnClickEvent(): void {
    this.btnClick.emit(true);
  }
}
