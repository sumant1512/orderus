import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeliveryOrdersFacade } from '../delivery-store/delivery-orders/delivery-orders.facade';
import {
  EDeliveryOrderStatus,
  EDeliveryOrders,
} from '../delivery-store/delivery-orders/enum/delivery-orders.enum';
import { IDeliveryOrders } from '../delivery-store/delivery-orders/interfaces/delivery-orders.interface';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  subscription = new Subscription();
  deliveryOrdersKeys = EDeliveryOrders;
  orderStatusEnum = EDeliveryOrderStatus;
  sortOrder = 1;
  ordersList: Array<IDeliveryOrders> = [];
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: ETabCode.ACTIVE_ORDERS },
    { id: 2, name: 'Open', code: ETabCode.OPEN_ORDERS },
    { id: 3, name: 'Delivered', code: ETabCode.DELIVERED_ORDERS },
  ];
  selectedSection: ITab = this.sectionList[0];

  constructor(
    private deliveryOrdersFacade: DeliveryOrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.deliveryOrdersFacade.fetchDeliveryOrders();
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
      case ETabCode.OPEN_ORDERS:
        this.getOpenOrders();
        break;
      case ETabCode.DELIVERED_ORDERS:
        this.getDeliveredOrders();
        break;
      default:
        this.getActiveOrders();
        break;
    }
  }

  getDeliveredOrders(): void {
    this.subscription.add(
      this.deliveryOrdersFacade.deliveredOrdersListState.subscribe(
        (deliveredOrdersList) => {
          this.ordersList = deliveredOrdersList;
        }
      )
    );
  }

  getOpenOrders(): void {
    this.subscription.add(
      this.deliveryOrdersFacade.openOrdersListState.subscribe(
        (deliveredOrdersList) => {
          this.ordersList = deliveredOrdersList;
        }
      )
    );
  }

  getActiveOrders(): void {
    this.subscription.add(
      this.deliveryOrdersFacade.activeOrdersListState.subscribe(
        (deliveredOrdersList) => {
          this.ordersList = deliveredOrdersList;
        }
      )
    );
  }

  getSelectedPromotion(selectedSection: ITab): void {
    console.log(selectedSection);
    this.selectedSection = selectedSection;
    this.getOrders();
    // this.subscription.add(
    //   this.restaurantPromotionsFacade
    //     .restaurantPromotionByStatus(
    //       selectedSection.code || ETabCode.ACTIVE
    //     )
    //     .subscribe((promotionList) => {
    //       this.promotionsList = promotionList;
    //     })
    // );
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
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (
          (b[colName as keyof IDeliveryOrders] as any) -
          (a[colName as keyof IDeliveryOrders] as any)
        );
      });
    } else {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (
          (a[colName as keyof IDeliveryOrders] as any) -
          (b[colName as keyof IDeliveryOrders] as any)
        );
      });
    }
    this.ordersList = sortedList;
  }

  sortString(colName: EDeliveryOrders): void {
    let sortedList: Array<IDeliveryOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (a[colName as keyof IDeliveryOrders] as string).localeCompare(
          b[colName as keyof IDeliveryOrders] as string
        );
      });
    } else {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (b[colName as keyof IDeliveryOrders] as string).localeCompare(
          a[colName as keyof IDeliveryOrders] as string
        );
      });
    }
    this.ordersList = sortedList;
  }
}
