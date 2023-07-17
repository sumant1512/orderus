import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
})
export class ButtonSecondaryComponent {
  @Input() label!: string;
  @Output() btnClick = new EventEmitter<boolean>();

  emitBtnClickEvent(): void {
    this.btnClick.emit(true);
  }
}
