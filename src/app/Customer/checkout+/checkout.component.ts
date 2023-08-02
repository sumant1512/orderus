import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes.constants';
import { Subscription } from 'rxjs';
import { IPayment } from '../../store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from '../../store/user-info/user-info.facade';
import { paymentForm } from './payment.form';
import { paymentInfoForm } from '../profile+/payment-info/payment-info.form';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  paymentInfoForm = paymentInfoForm();
  paymentForm = paymentForm();
  subscription = new Subscription();
  paymentList!: Array<IPayment>;
  isNewPaymentEnabled = true;

  selectedPaymentId = 0;

  constructor(private router: Router, private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getPaymentList();
  }

  get tipValue(): string {
    return this.paymentForm.get('tip')?.value;
  }

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  getPaymentList(): void {
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

  enableNewPayment(): void {
    this.isNewPaymentEnabled = !this.isNewPaymentEnabled;
  }

  navigateToCart(): void {
    this.router.navigate([APP_ROUTES.CART]);
  }
}
