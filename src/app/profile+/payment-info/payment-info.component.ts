import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPayment } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
})
export class PaymentInfoComponent implements OnInit {
  subscription = new Subscription();
  paymentList!: Array<IPayment>;

  constructor(private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserAddressList();
  }

  getUserAddressList(): void {
    this.subscription.add(
      this.userInfoFacade.userPaymentListInfo.subscribe((payment) => {
        this.paymentList = payment;
      })
    );
  }
}
