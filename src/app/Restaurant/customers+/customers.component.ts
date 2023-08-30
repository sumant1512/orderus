import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerFacade } from './customers-store/customer.facade';
import { ICustomer } from './customers-store/interfaces/customer.interface';
import {
  CustomerTableColumns,
  customerActionList,
} from './customers-store/customer.constants';
import { IAction } from '../restaurant-shared/interfaces/action.interface';
import { IMenuItemAction } from 'src/app/angular-material/components/material-table/material-table.interface';
import { EAction } from '../restaurant-shared/enum/action.enum';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  customerTableColumns: Array<any> = CustomerTableColumns();
  actionList: Array<IAction> = customerActionList;
  subscription = new Subscription();
  customerList!: Array<ICustomer>;

  constructor(
    private customerFacade: CustomerFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.customerFacade.fetchCustomer();
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToCustomerDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getCustomers(): void {
    this.subscription.add(
      this.customerFacade.customerListState.subscribe((customerList) => {
        this.customerList = customerList;
      })
    );
  }

  action(event: IMenuItemAction): void {
    switch (event.action.id) {
      case EAction.View:
        if (event?.data?.id) {
          this.navigateToCustomerDetails(event.data.id);
        }
        break;

      default:
        console.log(event);
        break;
    }
  }
}
