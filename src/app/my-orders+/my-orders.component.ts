import { Component } from '@angular/core';
import { IOrder } from '../shared/interfaces/my-order.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent {
  sortOrder = 1;
  orderList: Array<IOrder> = [
    {
      orderId: 1,
      restaurantName: 'Blue Point Sage Cafe',
      orderDateTime: new Date(),
      status: 'In Progress',
      amount: 149,
    },
    {
      orderId: 2,
      restaurantName: 'P.F Chang"s China Bistro',
      orderDateTime: new Date('7/4/2023'),
      status: 'Completed',
      amount: 351.234,
    },
    {
      orderId: 3,
      restaurantName: 'Texas Roadhouse',
      orderDateTime: new Date('7/3/2023'),
      status: 'Completed',
      amount: 258.2,
    },
    {
      orderId: 4,
      restaurantName: 'Famous Dave"s',
      orderDateTime: new Date('7/2/2023'),
      status: 'Canceled',
      amount: 795.08,
    },
    {
      orderId: 5,
      restaurantName: 'BJ"s Restaurant & Brewery',
      orderDateTime: new Date('6/5/2023'),
      status: 'Completed',
      amount: 603.35,
    },
    {
      orderId: 6,
      restaurantName: 'The Orignal Pancake House',
      orderDateTime: new Date('7/3/2023'),
      status: 'Completed',
      amount: 975.91,
    },
    {
      orderId: 7,
      restaurantName: 'Applebee"s',
      orderDateTime: new Date('2/1/2023'),
      status: 'Completed',
      amount: 433.82,
    },
    {
      orderId: 8,
      restaurantName: 'Hoss"s Steak & Sea House',
      orderDateTime: new Date('3/1/2023'),
      status: 'Completed',
      amount: 955.37,
    },
    {
      orderId: 9,
      restaurantName: 'Hard Rock Cafe',
      orderDateTime: new Date('4/1/2023'),
      status: 'Completed',
      amount: 918.73,
    },
    {
      orderId: 10,
      restaurantName: 'Dave & Buster"s',
      orderDateTime: new Date('5/1/2023'),
      status: 'Completed',
      amount: 617.84,
    },
    {
      orderId: 11,
      restaurantName: 'Quaker Steak & Lube',
      orderDateTime: new Date('6/1/2023'),
      status: 'Completed',
      amount: 976.23,
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToOrderDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  onSortClick(colName: string, type: string) {
    if (type === 'number') {
      this.sortNumbers(colName);
    } else if (type === 'string') {
      this.sortString(colName);
    } else if (type === 'date') {
      this.sortNumbers(colName);
    }
    this.sortOrder = this.sortOrder === 1 ? -1 : 1;
  }

  sortNumbers(colName: string): void {
    if (this.sortOrder === 1) {
      this.orderList.sort((a, b) => {
        return (
          (b[colName as keyof IOrder] as any) -
          (a[colName as keyof IOrder] as any)
        );
      });
    } else {
      this.orderList.sort((a, b) => {
        return (
          (a[colName as keyof IOrder] as any) -
          (b[colName as keyof IOrder] as any)
        );
      });
    }
  }

  sortString(colName: string): void {
    if (this.sortOrder === 1) {
      this.orderList.sort((a, b) => {
        return (a[colName as keyof IOrder] as string).localeCompare(
          b[colName as keyof IOrder] as string
        );
      });
    } else {
      this.orderList.sort((a, b) => {
        return (b[colName as keyof IOrder] as string).localeCompare(
          a[colName as keyof IOrder] as string
        );
      });
    }
  }
}
