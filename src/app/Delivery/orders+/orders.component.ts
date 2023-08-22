import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeliveryOrdersFacade } from '../delivery-store/delivery-orders/delivery-orders.facade';
import { EDeliveryOrders } from '../delivery-store/delivery-orders/enum/delivery-orders.enum';
import { IDeliveryOrders } from '../delivery-store/delivery-orders/interfaces/delivery-orders.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  subscription = new Subscription();
  deliveryOrdersKeys = EDeliveryOrders;
  sortOrder = 1;
  deliveryOrdersList!: Array<IDeliveryOrders>;

  constructor(
    private deliveryOrdersFacade: DeliveryOrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.deliveryOrdersFacade.fetchDeliveryOrders();
  }

  ngOnInit(): void {
    this.getDeliveryOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getDeliveryOrders(): void {
    this.subscription.add(
      this.deliveryOrdersFacade.deliveryOrdersListState.subscribe(
        (deliveryOrdersList) => {
          this.deliveryOrdersList = deliveryOrdersList;
        }
      )
    );
  }

  onSortClick(colName: EDeliveryOrders, type: string) {
    if (type === 'number') {
      this.sortNumbers(colName);
    } else if (type === 'string') {
      this.sortString(colName);
    } else if (type === 'date') {
      this.sortNumbers(colName);
    }
    this.sortOrder = this.sortOrder === 1 ? -1 : 1;
  }

  sortNumbers(colName: EDeliveryOrders): void {
    let sortedList: Array<IDeliveryOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.deliveryOrdersList]?.sort((a, b) => {
        return (
          (b[colName as keyof IDeliveryOrders] as any) -
          (a[colName as keyof IDeliveryOrders] as any)
        );
      });
    } else {
      sortedList = [...this.deliveryOrdersList]?.sort((a, b) => {
        return (
          (a[colName as keyof IDeliveryOrders] as any) -
          (b[colName as keyof IDeliveryOrders] as any)
        );
      });
    }
    this.deliveryOrdersList = sortedList;
  }

  sortString(colName: EDeliveryOrders): void {
    let sortedList: Array<IDeliveryOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.deliveryOrdersList]?.sort((a, b) => {
        return (a[colName as keyof IDeliveryOrders] as string).localeCompare(
          b[colName as keyof IDeliveryOrders] as string
        );
      });
    } else {
      sortedList = [...this.deliveryOrdersList]?.sort((a, b) => {
        return (b[colName as keyof IDeliveryOrders] as string).localeCompare(
          a[colName as keyof IDeliveryOrders] as string
        );
      });
    }
    this.deliveryOrdersList = sortedList;
  }
}
