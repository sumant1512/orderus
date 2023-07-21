import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAddress } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent {
  @Input() address!: IAddress;
  @Input() isSelectEnabled: boolean = false;
  @Input() isSelected: boolean = false;

  @Output() selectedCardEvent = new EventEmitter<number>();

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }
}
