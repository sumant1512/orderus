import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAddress } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
})
export class AddressInfoComponent implements OnInit {
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
  }
}
