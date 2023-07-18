import { Component } from '@angular/core';
import { IAddress } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
})
export class AddressInfoComponent {
  addressList: Array<IAddress> = [
    {
      id: 1,
      imgUrl: './../../../../assets/profile/map.png',
      imgAlt: 'Map',
      country: 'USA',
      state: 'New York',
      city: 'New York',
      address1: '4517 Washington Ave.',
      address2: 'Manchester',
      pinCode: '11004',
    },
    {
      id: 2,
      imgUrl: './../../../../assets/profile/map.png',
      imgAlt: 'Map',
      country: 'USA',
      state: 'California',
      city: 'San Deigo',
      address1: '3891 Ranchview ontario Dr.',
      address2: 'Richardson',
      pinCode: '62639',
    },
  ];
}
