import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.ADMINS,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.ADMINS,
        component: AdminsComponent,
      },
      {
        path: `${APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.ADMINS}/:id`,
        component: AdminDetailsComponent,
      },
      {
        path: APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.REGISTER,
        component: AdminRegistrationComponent,
      },
      {
        path: `${APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.UPDATE}/:id`,
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
