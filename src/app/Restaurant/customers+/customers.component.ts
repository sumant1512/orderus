import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerFacade } from './customers-store/customer/customer.facade';
import { ECustomer } from './customers-store/customer/enum/customer.enum';
import { ICustomer } from './customers-store/customer/interfaces/customer.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  subscription = new Subscription();
  customerKeys = ECustomer;
  sortOrder = 1;
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

  navigateToAdminDetails(id: number): void {
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

  onSortClick(colName: ECustomer, type: string) {
    if (type === 'number') {
      this.sortNumbers(colName);
    } else if (type === 'string') {
      this.sortString(colName);
    } else if (type === 'date') {
      this.sortNumbers(colName);
    }
    this.sortOrder = this.sortOrder === 1 ? -1 : 1;
  }

  sortNumbers(colName: ECustomer): void {
    let sortedList: Array<ICustomer>;
    if (this.sortOrder === 1) {
      sortedList = [...this.customerList]?.sort((a, b) => {
        return (
          (b[colName as keyof ICustomer] as any) -
          (a[colName as keyof ICustomer] as any)
        );
      });
    } else {
      sortedList = [...this.customerList]?.sort((a, b) => {
        return (
          (a[colName as keyof ICustomer] as any) -
          (b[colName as keyof ICustomer] as any)
        );
      });
    }
    this.customerList = sortedList;
  }

  sortString(colName: ECustomer): void {
    let sortedList: Array<ICustomer>;
    if (this.sortOrder === 1) {
      sortedList = [...this.customerList]?.sort((a, b) => {
        return (a[colName as keyof ICustomer] as string).localeCompare(
          b[colName as keyof ICustomer] as string
        );
      });
    } else {
      sortedList = [...this.customerList]?.sort((a, b) => {
        return (b[colName as keyof ICustomer] as string).localeCompare(
          a[colName as keyof ICustomer] as string
        );
      });
    }
    this.customerList = sortedList;
  }
}
