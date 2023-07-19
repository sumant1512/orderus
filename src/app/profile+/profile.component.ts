import { Component } from '@angular/core';
import { ISettings } from '../shared/interfaces/settings.interface';
import { EHeadingType } from '../shared/enum/heading-type.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  headingTypeList = EHeadingType;
  settingsList: Array<ISettings> = [
    {
      id: 1,
      name: 'Accounts',
      path: 'account',
      description: 'Personal Information',
      imgUrl: './../../assets/icons/user.svg',
      imgAlt: 'user',
    },
    {
      id: 2,
      name: 'Address',
      path: 'address',
      description: 'Shipping Address',
      imgUrl: './../../assets/icons/location.svg',
      imgAlt: 'address',
    },
    {
      id: 3,
      name: 'Payment Method',
      path: 'payment',
      description: 'Connected credit cards',
      imgUrl: './../../assets/icons/credit-card.svg',
      imgAlt: 'payment',
    },
    {
      id: 4,
      name: 'Security',
      path: 'security',
      description: 'Password, 2FA',
      imgUrl: './../../assets/icons/security.svg',
      imgAlt: 'security',
    },
  ];

  selectedSettingId = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getNameById(id: number): string {
    const foundItem = this.settingsList.find((item) => item.id === id);
    return foundItem ? foundItem.name : '';
  }

  getPathById(id: number): string {
    const foundItem = this.settingsList.find((item) => item.id === id);
    return foundItem ? foundItem.path : '';
  }

  selectSetting(id: number): void {
    this.selectedSettingId = id;
    this.navigate(this.getPathById(id));
  }

  navigate(routerPath: string): void {
    this.router.navigate([`${routerPath}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
