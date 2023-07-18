import { Component, Input } from '@angular/core';
import { IPayment } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent {
  @Input() payment!: IPayment;
}
