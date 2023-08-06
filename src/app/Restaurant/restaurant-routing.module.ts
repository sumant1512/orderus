import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.RESTAURANT.CHILD_ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.RESTAURANT.CHILD_ROUTES.DASHBOARD,
        loadChildren: () =>
          import('./dashboard+/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: APP_ROUTES.RESTAURANT.CHILD_ROUTES.CUSTOMERS,
        loadChildren: () =>
          import('./customers+/customers.module').then(
            (m) => m.CustomersModule
          ),
      },
      {
        path: APP_ROUTES.RESTAURANT.CHILD_ROUTES.MENU,
        loadChildren: () =>
          import('./menu+/menu.module').then((m) => m.MenuModule),
      },
      {
        path: APP_ROUTES.RESTAURANT.CHILD_ROUTES.ORDERS,
        loadChildren: () =>
          import('./orders+/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: APP_ROUTES.RESTAURANT.CHILD_ROUTES.PROMOTIONS,
        loadChildren: () =>
          import('./promotions+/promotions.module').then(
            (m) => m.PromotionsModule
          ),
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRoutingModule {}
