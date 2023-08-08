import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';
import { AuthGuard } from './store/user-info/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./Customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: APP_ROUTES.LOGIN,
    loadChildren: () =>
      import('./General/login+/login.module').then((m) => m.LoginModule),
  },
  {
    path: APP_ROUTES.FORGET_PASSWORD,
    loadChildren: () =>
      import('./General/forget-password+/forget-password.module').then(
        (m) => m.ForgetPasswordModule
      ),
  },
  {
    path: APP_ROUTES.REGISTRATION,
    loadChildren: () =>
      import('./General/registration+/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: APP_ROUTES.VERIFY,
    loadChildren: () =>
      import('./General/verify+/verify.module').then((m) => m.VerifyModule),
  },
  {
    path: APP_ROUTES.SUPER_ADMIN.PARENT,
    loadChildren: () =>
      import('./Super-Admin/super-admin.module').then(
        (m) => m.SuperAdminModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: APP_ROUTES.ADMIN.PARENT,
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: APP_ROUTES.RESTAURANT.PARENT,
    loadChildren: () =>
      import('./Restaurant/restaurant.module').then((m) => m.RestaurantModule),
    canActivate: [AuthGuard],
  },
  {
    path: APP_ROUTES.DELIVERY.PARENT,
    loadChildren: () =>
      import('./Delivery/delivery.module').then((m) => m.DeliveryModule),
    canActivate: [AuthGuard],
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
