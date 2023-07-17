import { Component } from '@angular/core';
import { ISettings } from '../shared/interfaces/settings.interface';
import { EHeadingType } from '../shared/enum/heading-type.enum';

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
      description: 'Personal Information',
      imgUrl: '',
      imgAlt: '',
    },
    {
      id: 2,
      name: 'Address',
      description: 'Shipping Address',
      imgUrl: '',
      imgAlt: '',
    },
    {
      id: 3,
      name: 'Payment Method',
      description: 'Connected credit cards',
      imgUrl: '',
      imgAlt: '',
    },
    {
      id: 4,
      name: 'Security',
      description: 'Password, 2FA',
      imgUrl: '',
      imgAlt: '',
    },
  ];

  selectedSettingId = 1;

  getNameById(id: number): string {
    const foundItem = this.settingsList.find((item) => item.id === id);
    return foundItem ? foundItem.name : '';
  }

  selectSetting(id: number): void {
    this.selectedSettingId = id;
  }
}
