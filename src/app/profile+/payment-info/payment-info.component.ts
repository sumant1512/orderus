import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPayment } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';
import { paymentInfoForm } from './payment-info.form';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
})
export class PaymentInfoComponent implements OnInit {
  paymentInfoForm = paymentInfoForm();
  subscription = new Subscription();
  paymentList!: Array<IPayment>;

  selectedPaymentId = 0;

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

  selectPayment(id: number): void {
    this.selectedPaymentId = id;
    // const selectedAddress = this.addressList.find(
    //   (address) => address.id === id
    // );
    // if (selectedAddress) {
    //   this.setAddressForm(selectedAddress);
    // }
  }
}
