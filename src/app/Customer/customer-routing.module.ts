import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { AuthGuard } from '../store/user-info/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./landing+/landing.module').then((m) => m.LandingModule),
      },
      {
        path: APP_ROUTES.RESTAURANTS,
        loadChildren: () =>
          import('./restaurants+/restaurants.module').then(
            (m) => m.RestaurantsModule
          ),
      },
      {
        path: APP_ROUTES.DEALS,
        loadChildren: () =>
          import('./deals+/deals.module').then((m) => m.DealsModule),
      },
      {
        path: APP_ROUTES.MY_ORDERS,
        loadChildren: () =>
          import('./my-orders+/my-orders.module').then((m) => m.MyOrdersModule),
        canActivate: [AuthGuard],
      },
      {
        path: APP_ROUTES.CART,
        loadChildren: () =>
          import('./cart+/cart.module').then((m) => m.CartModule),
      },
      {
        path: APP_ROUTES.CHECKOUT,
        loadChildren: () =>
          import('./checkout+/checkout.module').then((m) => m.CheckoutModule),
        canActivate: [AuthGuard],
      },

      {
        path: APP_ROUTES.PROFILE,
        loadChildren: () =>
          import('./profile+/profile.module').then((m) => m.ProfileModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
