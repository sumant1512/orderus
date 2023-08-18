import { Component } from '@angular/core';
import { IImage } from 'src/app/shared/interfaces/image.interface';
import { ISettings } from 'src/app/shared/interfaces/settings.interface';

export interface IPopularMeals extends IImage {
  id: number;
  name: string;
  ordersCount: number;
  price: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  orderReceived: ISettings = {
    id: 1,
    img: './../../../assets/icons/bag.svg',
    imgAlt: 'Orders received',
    name: '9,273',
    description: 'Orders received',
  };
  ordersDelivered: ISettings = {
    id: 2,
    img: './../../../assets/icons/truck.svg',
    imgAlt: 'Orders delivered',
    name: '7,691',
    description: 'Orders delivered',
  };
  revenue: ISettings = {
    id: 3,
    img: './../../../assets/icons/pie-chart.svg',
    imgAlt: 'Revenue',
    name: '$ 4372.91',
    status: -21,
    description: 'Revenue today',
  };

  popularMealsList: Array<IPopularMeals> = [
    {
      id: 1,
      img: './../../../assets/menu-card/item-1.jpg',
      imgAlt: 'meal',
      name: 'Nigri set',
      ordersCount: 361,
      price: 16.8,
    },
    {
      id: 2,
      img: './../../../assets/menu-card/item-1.jpg',
      imgAlt: 'meal',
      name: 'Roll set',
      ordersCount: 338,
      price: 16.8,
    },
    {
      id: 3,
      img: './../../../assets/menu-card/item-1.jpg',
      imgAlt: 'meal',
      name: 'Spicy tuna roll',
      ordersCount: 323,
      price: 16.8,
    },
    {
      id: 4,
      img: './../../../assets/menu-card/item-1.jpg',
      imgAlt: 'meal',
      name: 'Green dragon',
      ordersCount: 306,
      price: 16.8,
    },
  ];

  onCardSelect(event: number): void {
    console.log(event);
  }
}
