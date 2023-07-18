import { Component } from '@angular/core';
import { IPayment } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
})
export class PaymentInfoComponent {
  paymentList: Array<IPayment> = [
    {
      id: 1,
      cardNumber: '4444',
      expiryDate: '12/29',
      cardHolerName: 'Sumant Mishra',
      cardType: 'visa',
    },
    {
      id: 2,
      cardNumber: '9204',
      expiryDate: '09/31',
      cardHolerName: 'Sanjay Sharma',
      cardType: 'mastercard',
    },
  ];
}
