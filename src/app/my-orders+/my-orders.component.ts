import { Component } from '@angular/core';
import { IOrder } from '../shared/interfaces/my-order.interface';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent {
  orderList: Array<IOrder> = [
    {
      orderId: 1,
      restaurantName: 'Blue Point Sage Cafe',
      orderDateTime: new Date().toDateString(),
      status: 'In Progress',
      amount: 149,
    },
    {
      orderId: 2,
      restaurantName: 'P.F Chang"s China Bistro',
      orderDateTime: new Date('7/4/2023').toDateString(),
      status: 'Completed',
      amount: 351.234,
    },
    {
      orderId: 3,
      restaurantName: 'Texas Roadhouse',
      orderDateTime: new Date('7/3/2023').toDateString(),
      status: 'Completed',
      amount: 258.2,
    },
    {
      orderId: 4,
      restaurantName: 'Famous Dave"s',
      orderDateTime: new Date('7/2/2023').toDateString(),
      status: 'Canceled',
      amount: 795.08,
    },
    {
      orderId: 5,
      restaurantName: 'BJ"s Restaurant & Brewery',
      orderDateTime: new Date('6/5/2023').toDateString(),
      status: 'Completed',
      amount: 603.35,
    },
    {
      orderId: 6,
      restaurantName: 'The Orignal Pancake House',
      orderDateTime: new Date('7/3/2023').toDateString(),
      status: 'Completed',
      amount: 975.91,
    },
    {
      orderId: 7,
      restaurantName: 'Applebee"s',
      orderDateTime: new Date('2/1/2023').toDateString(),
      status: 'Completed',
      amount: 433.82,
    },
    {
      orderId: 8,
      restaurantName: 'Hoss"s Steak & Sea House',
      orderDateTime: new Date('3/1/2023').toDateString(),
      status: 'Completed',
      amount: 955.37,
    },
    {
      orderId: 9,
      restaurantName: 'Hard Rock Cafe',
      orderDateTime: new Date('4/1/2023').toDateString(),
      status: 'Completed',
      amount: 918.73,
    },
    {
      orderId: 10,
      restaurantName: 'Dave & Buster"s',
      orderDateTime: new Date('5/1/2023').toDateString(),
      status: 'Completed',
      amount: 617.84,
    },
    {
      orderId: 11,
      restaurantName: 'Quaker Steak & Lube',
      orderDateTime: new Date('6/1/2023').toDateString(),
      status: 'Completed',
      amount: 976.23,
    },
  ];
}
