import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-danger',
  templateUrl: './button-danger.component.html',
  styleUrls: ['./button-danger.component.scss'],
})
export class ButtonDangerComponent {
  @Input() label!: string;
  @Output() btnClick = new EventEmitter<boolean>();

  emitBtnClickEvent(): void {
    this.btnClick.emit(true);
  }
}
