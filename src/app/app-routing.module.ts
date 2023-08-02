import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';
import { AuthGuard } from './store/user-info/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./Customer/landing+/landing.module').then((m) => m.LandingModule),
  },
  {
    path: APP_ROUTES.RESTAURANTS,
    loadChildren: () =>
      import('./Customer/restaurants+/restaurants.module').then(
        (m) => m.RestaurantsModule
      ),
  },
  {
    path: APP_ROUTES.DEALS,
    loadChildren: () =>
      import('./Customer/deals+/deals.module').then((m) => m.DealsModule),
  },
  {
    path: APP_ROUTES.MY_ORDERS,
    loadChildren: () =>
      import('./Customer/my-orders+/my-orders.module').then(
        (m) => m.MyOrdersModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: APP_ROUTES.CART,
    loadChildren: () =>
      import('./Customer/cart+/cart.module').then((m) => m.CartModule),
  },
  {
    path: APP_ROUTES.CHECKOUT,
    loadChildren: () =>
      import('./Customer/checkout+/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: APP_ROUTES.PROFILE,
    loadChildren: () =>
      import('./Customer/profile+/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: APP_ROUTES.LOGIN,
    loadChildren: () =>
      import('./Customer/login+/login.module').then((m) => m.LoginModule),
  },
  {
    path: APP_ROUTES.FORGET_PASSWORD,
    loadChildren: () =>
      import('./Customer/forget-password+/forget-password.module').then(
        (m) => m.ForgetPasswordModule
      ),
  },
  {
    path: APP_ROUTES.REGISTRATION,
    loadChildren: () =>
      import('./Customer/registration+/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: APP_ROUTES.RESTAURANT,
    loadChildren: () =>
      import('./Restaurant/restaurant.module').then((m) => m.RestaurantModule),
  },
  {
    path: APP_ROUTES.VERIFY,
    loadChildren: () =>
      import('./Customer/verify+/verify.module').then((m) => m.VerifyModule),
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
