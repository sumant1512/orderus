import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';

const routes: Routes = [
  {
    path: '',
    component: ChefComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.CHEF.CHILD_ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.CHEF.CHILD_ROUTES.DASHBOARD,
        loadChildren: () =>
          import('./dashboard+/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: APP_ROUTES.CHEF.CHILD_ROUTES.ORDERS,
        loadChildren: () =>
          import('./orders+/orders.module').then((m) => m.OrdersModule),
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChefRoutingModule {}
