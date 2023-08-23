import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ERestaurantDeliveryOrderStatus,
  ERestaurantReceivedOrders,
} from './orders-store/restaurant-received-orders/enum/restaurant-received-orders.enum';
import { IRestaurantReceivedOrders } from './orders-store/restaurant-received-orders/interfaces/restaurant-received-orders.interface';
import { RestaurantReceivedOrdersFacade } from './orders-store/restaurant-received-orders/restaurant-received-orders.facade';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

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
  orderStatusEnum = ERestaurantDeliveryOrderStatus;
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: ETabCode.ACTIVE },
    { id: 2, name: 'Open', code: ETabCode.OPEN },
    { id: 3, name: 'Delivered', code: ETabCode.DELIVERED },
  ];
  selectedSection: ITab = this.sectionList[0];

  constructor(
    private restaurantReceivedOrdersFacade: RestaurantReceivedOrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.restaurantReceivedOrdersFacade.fetchRestaurantReceivedDeliveredOrders();
    this.restaurantReceivedOrdersFacade.fetchRestaurantReceivedOpenOrders();
    this.restaurantReceivedOrdersFacade.fetchRestaurantReceivedActiveOrders();
  }

  ngOnInit(): void {
    this.getOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getOrders(): void {
    switch (this.selectedSection.code) {
      case ETabCode.OPEN:
        this.getRestaurantReceivedOpenOrders();
        break;
      case ETabCode.DELIVERED:
        this.getRestaurantReceivedDeliveredOrders();
        break;
      default:
        this.getRestaurantReceivedActiveOrders();
        break;
    }
  }

  getSelectedOrders(selectedSection: ITab): void {
    this.selectedSection = selectedSection;
    this.getOrders();
  }

  getRestaurantReceivedDeliveredOrders(): void {
    this.subscription.add(
      this.restaurantReceivedOrdersFacade.restaurantReceivedDeliveredOrdersList.subscribe(
        (restaurantReceivedDeliveredOrdersList) => {
          this.restaurantReceivedOrdersList =
            restaurantReceivedDeliveredOrdersList;
        }
      )
    );
  }

  getRestaurantReceivedOpenOrders(): void {
    this.subscription.add(
      this.restaurantReceivedOrdersFacade.restaurantReceivedOpenOrdersList.subscribe(
        (restaurantReceivedOpenOrdersList) => {
          this.restaurantReceivedOrdersList = restaurantReceivedOpenOrdersList;
        }
      )
    );
  }

  getRestaurantReceivedActiveOrders(): void {
    this.subscription.add(
      this.restaurantReceivedOrdersFacade.restaurantReceivedActiveOrdersList.subscribe(
        (restaurantReceivedActiveOrdersList) => {
          this.restaurantReceivedOrdersList =
            restaurantReceivedActiveOrdersList;
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
