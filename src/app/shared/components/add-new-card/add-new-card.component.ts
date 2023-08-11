import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.scss'],
})
export class AddNewCardComponent {
  @Input() label: string = 'New';

  @Output() onClickEvent = new EventEmitter<boolean>();
  iconColor = 'black';

  emitEvent(): void {
    this.onClickEvent.emit(true);
  }
}
