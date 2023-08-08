import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { CustomersComponent } from './customers/customers.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.CUSTOMERS,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.CUSTOMERS,
        component: CustomersComponent,
      },
      {
        path: APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.REGISTER,
        component: AdminRegistrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
