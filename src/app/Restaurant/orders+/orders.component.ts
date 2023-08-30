import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ERestaurantDeliveryOrderStatus } from './restaurant-received-orders/restaurant-received-orders.enum';
import { IRestaurantReceivedOrders } from './restaurant-received-orders/restaurant-received-orders.interface';
import { RestaurantReceivedOrdersFacade } from './restaurant-received-orders/restaurant-received-orders.facade';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';
import {
  RestaurantReceivedOrdersTableColumns,
  restaurantReceivedOpenOrdersActionList,
  restaurantReceivedActiveOrdersActionList,
  restaurantReceivedDeliveredOrdersActionList,
} from './restaurant-received-orders/restaurant-received-orders.constants';
import { IMenuItemAction } from 'src/app/angular-material/components/material-table/material-table.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  customerTableColumns: Array<any> = RestaurantReceivedOrdersTableColumns();
  actionList: Array<any> = restaurantReceivedActiveOrdersActionList;
  subscription = new Subscription();
  restaurantReceivedOrdersList!: Array<IRestaurantReceivedOrders>;

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

  navigateToOrderDetails(id: number): void {
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
          this.actionList = restaurantReceivedDeliveredOrdersActionList;
        }
      )
    );
  }

  getRestaurantReceivedOpenOrders(): void {
    this.subscription.add(
      this.restaurantReceivedOrdersFacade.restaurantReceivedOpenOrdersList.subscribe(
        (restaurantReceivedOpenOrdersList) => {
          this.restaurantReceivedOrdersList = restaurantReceivedOpenOrdersList;
          this.actionList = restaurantReceivedOpenOrdersActionList;
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
          this.actionList = restaurantReceivedActiveOrdersActionList;
        }
      )
    );
  }

  action(event: IMenuItemAction): void {
    switch (event.action.id) {
      case ERestaurantDeliveryOrderStatus.VIEW:
        if (event?.data?.id) {
          this.navigateToOrderDetails(event.data.id);
        }
        break;

      default:
        console.log(event);
        break;
    }
  }
}
