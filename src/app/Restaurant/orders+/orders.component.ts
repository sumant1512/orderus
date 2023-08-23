import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ERestaurantReceivedOrders } from './orders-store/restaurant-received-orders/enum/restaurant-received-orders.enum';
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
  sectionList: Array<ITab> = [
    { id: 1, name: 'In progress', code: ETabCode.IN_PROGRESS },
    { id: 2, name: 'Open', code: ETabCode.OPEN_ORDERS },
    { id: 3, name: 'Delivered', code: ETabCode.DELIVERED_ORDERS },
  ];
  selectedSection: ITab = this.sectionList[0];

  constructor(
    private restaurantReceivedOrdersFacade: RestaurantReceivedOrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.restaurantReceivedOrdersFacade.fetchRestaurantReceivedOrders();
  }

  ngOnInit(): void {
    this.getRestaurantReceivedOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getSelectedOrders(selectedSection: ITab): void {
    this.selectedSection = selectedSection;
    console.log(this.selectedSection);
    // this.getOrders();
  }

  getRestaurantReceivedOrders(): void {
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
