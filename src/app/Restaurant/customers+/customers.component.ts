import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerFacade } from './customers-store/customer/customer.facade';
import { ICustomer } from './customers-store/customer/interfaces/customer.interface';
import { CustomerTableColumns } from './customers-store/customer/customer.constants';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  customerTableColumns: Array<any> = CustomerTableColumns();
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
}
