import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPayment } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent {
  @Input() payment!: IPayment;
  @Input() isActionEnabled: boolean = true;
  @Input() isSelectEnabled: boolean = false;
  @Input() isSelected: boolean = false;

  isActionHidden = true;

  @Output() selectedCardEvent = new EventEmitter<number>();

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }

  getCardTypeImge(cardType: string): string {
    switch (cardType) {
      case 'visa':
        return './../../../assets/icons/visa-credit-card.svg';
        break;
      case 'mastercard':
        return './../../../assets/icons/mastercard.svg';
        break;
      default:
        return './../../../assets/icons/visa-credit-card.svg';
        break;
    }
  }

  toggleAction(id: number): void {
    var list = document.getElementById(`${id}`);

    this.isActionHidden = !this.isActionHidden;
    this.isActionHidden
      ? list?.classList.add('hidden')
      : list?.classList.remove('hidden');
  }
}
