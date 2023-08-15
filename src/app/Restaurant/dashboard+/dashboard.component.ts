import { Component } from '@angular/core';
import { ISettings } from 'src/app/shared/interfaces/settings.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  orderReceived: ISettings = {
    id: 1,
    img: './../../../assets/icons/credit-card.svg',
    imgAlt: 'Orders received',
    name: '9,273',
    description: 'Orders received',
  };
  ordersDelivered: ISettings = {
    id: 2,
    img: './../../../assets/icons/credit-card.svg',
    imgAlt: 'Orders delivered',
    name: '7,691',
    description: 'Orders delivered',
  };
  revenue: ISettings = {
    id: 3,
    img: './../../../assets/icons/credit-card.svg',
    imgAlt: 'Revenue',
    name: '$ 4372.91',
    description: 'Revenue today',
  };
  onCardSelect(event: number): void {
    console.log(event);
  }
}
