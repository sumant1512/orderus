import { Component, Input } from '@angular/core';
import { IAddress } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent {
  @Input() address!: IAddress;
}
