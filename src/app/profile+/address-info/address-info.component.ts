import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAddress } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';
import { addressInfoForm } from './accress-info.form';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
})
export class AddressInfoComponent implements OnInit {
  addressInforForm = addressInfoForm();
  subscription = new Subscription();
  addressList!: Array<IAddress>;

  selectedAddressId = 0;

  constructor(private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserAddressList();
  }

  getUserAddressList(): void {
    this.subscription.add(
      this.userInfoFacade.userAddressListInfo.subscribe((address) => {
        this.addressList = address;
      })
    );
  }

  selectAddress(id: number): void {
    this.selectedAddressId = id;
    // const selectedAddress = this.addressList.find(
    //   (address) => address.id === id
    // );
    // if (selectedAddress) {
    //   this.setAddressForm(selectedAddress);
    // }
  }

  setAddressForm(address: IAddress): void {
    this.addressInforForm.setValue({
      address1: address.address1 || '',
      address2: address.address2 || '',
      country: address.country || '',
      state: address.state || '',
      city: address.city || '',
      pinCode: address.pinCode || '',
    });
  }
}
