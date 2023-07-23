import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
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
  },
  {
    path: APP_ROUTES.CART,
    loadChildren: () => import('./cart+/cart.module').then((m) => m.CartModule),
  },
  {
    path: APP_ROUTES.CHECKOUT,
    loadChildren: () =>
      import('./checkout+/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: APP_ROUTES.PROFILE,
    loadChildren: () =>
      import('./profile+/profile.module').then((m) => m.ProfileModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
