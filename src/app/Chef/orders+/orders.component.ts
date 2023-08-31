import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChefOrdersFacade } from '../chef-store/chef-orders/chef-orders.facade';
import {
  EChefOrderStatus,
  EChefOrders,
} from '../chef-store/chef-orders/enum/chef-orders.enum';
import { IChefOrders } from '../chef-store/chef-orders/interfaces/chef-orders.interface';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  subscription = new Subscription();
  chefOrdersKeys = EChefOrders;
  orderStatusEnum = EChefOrderStatus;
  sortOrder = 1;
  ordersList: Array<IChefOrders> = [];
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: ETabCode.ACTIVE },
    { id: 2, name: 'Open', code: ETabCode.OPEN },
    { id: 3, name: 'Delivered', code: ETabCode.DELIVERED },
  ];
  selectedSection: ITab = this.sectionList[0];

  constructor(
    private chefOrdersFacade: ChefOrdersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getChefOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getChefOrders(): void {
    this.subscription.add(
      this.chefOrdersFacade.chefOrdersListState.subscribe((chefOrdersList) => {
        this.ordersList = chefOrdersList;
      })
    );
  }

  getSelectedOrders(selectedSection: ITab): void {
    this.selectedSection = selectedSection;
    this.chefOrdersFacade.fetchChefOrders(
      selectedSection.code || ETabCode.ACTIVE
    );
  }

  onSortClick(colName: EChefOrders, type: string) {
    if (type === 'number') {
      this.sortNumbers(colName);
    } else if (type === 'string') {
      this.sortString(colName);
    } else if (type === 'date') {
      this.sortNumbers(colName);
    }
    this.sortOrder = this.sortOrder === 1 ? -1 : 1;
  }

  sortNumbers(colName: EChefOrders): void {
    let sortedList: Array<IChefOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (
          (b[colName as keyof IChefOrders] as any) -
          (a[colName as keyof IChefOrders] as any)
        );
      });
    } else {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (
          (a[colName as keyof IChefOrders] as any) -
          (b[colName as keyof IChefOrders] as any)
        );
      });
    }
    this.ordersList = sortedList;
  }

  sortString(colName: EChefOrders): void {
    let sortedList: Array<IChefOrders>;
    if (this.sortOrder === 1) {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (a[colName as keyof IChefOrders] as string).localeCompare(
          b[colName as keyof IChefOrders] as string
        );
      });
    } else {
      sortedList = [...this.ordersList]?.sort((a, b) => {
        return (b[colName as keyof IChefOrders] as string).localeCompare(
          a[colName as keyof IChefOrders] as string
        );
      });
    }
    this.ordersList = sortedList;
  }
}
