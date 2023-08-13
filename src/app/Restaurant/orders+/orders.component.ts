import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ERestaurantReceivedOrders } from 'src/app/store/restaurant-received-orders/enum/restaurant-received-orders.enum';
import { IRestaurantReceivedOrders } from 'src/app/store/restaurant-received-orders/interfaces/restaurant-received-orders.interface';
import { RestaurantReceivedOrdersFacade } from 'src/app/store/restaurant-received-orders/restaurant-received-orders.facade';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  subscription = new Subscription();
  restaurantReceivedOrdersKeys = ERestaurantReceivedOrders;
  sortOrder = 1;
  restaurantReceivedOrdersList!: Array<IRestaurantReceivedOrders>;

  constructor(
    private restaurantReceivedOrdersFacade: RestaurantReceivedOrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.restaurantReceivedOrdersFacade.fetchRestaurantReceivedOrders();
  }

  ngOnInit(): void {
    this.getRestaurantReceivedOrderss();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getRestaurantReceivedOrderss(): void {
    this.subscription.add(
      this.restaurantReceivedOrdersFacade.restaurantReceivedOrdersListState.subscribe(
        (restaurantReceivedOrdersList) => {
          this.restaurantReceivedOrdersList = restaurantReceivedOrdersList;
        }
      )
    );
  }

  onSortClick(colName: ERestaurantReceivedOrders, type: string) {
    if (type === 'number') {
      this.sortNumbers(colName);
    } else if (type === 'string') {
      this.sortString(colName);
    } else if (type === 'date') {
      this.sortNumbers(colName);
    }
    this.sortOrder = this.sortOrder === 1 ? -1 : 1;
  }

  sortNumbers(colName: ERestaurantReceivedOrders): void {
    let sortedList: Array<IRestaurantReceivedOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.restaurantReceivedOrdersList]?.sort((a, b) => {
        return (
          (b[colName as keyof IRestaurantReceivedOrders] as any) -
          (a[colName as keyof IRestaurantReceivedOrders] as any)
        );
      });
    } else {
      sortedList = [...this.restaurantReceivedOrdersList]?.sort((a, b) => {
        return (
          (a[colName as keyof IRestaurantReceivedOrders] as any) -
          (b[colName as keyof IRestaurantReceivedOrders] as any)
        );
      });
    }
    this.restaurantReceivedOrdersList = sortedList;
  }

  sortString(colName: ERestaurantReceivedOrders): void {
    let sortedList: Array<IRestaurantReceivedOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.restaurantReceivedOrdersList]?.sort((a, b) => {
        return (
          a[colName as keyof IRestaurantReceivedOrders] as string
        ).localeCompare(
          b[colName as keyof IRestaurantReceivedOrders] as string
        );
      });
    } else {
      sortedList = [...this.restaurantReceivedOrdersList]?.sort((a, b) => {
        return (
          b[colName as keyof IRestaurantReceivedOrders] as string
        ).localeCompare(
          a[colName as keyof IRestaurantReceivedOrders] as string
        );
      });
    }
    this.restaurantReceivedOrdersList = sortedList;
  }
}
