import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAddress } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent {
  @Input() address!: IAddress;
  @Input() isActionEnabled: boolean = true;
  @Input() isSelectEnabled: boolean = false;
  @Input() isSelected: boolean = false;

  isActionHidden = true;

  @Output() selectedCardEvent = new EventEmitter<number>();

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }

  toggleAction(id: number): void {
    var list = document.getElementById(`${id}`);

    this.isActionHidden = !this.isActionHidden;
    this.isActionHidden
      ? list?.classList.add('hidden')
      : list?.classList.remove('hidden');
  }
}
