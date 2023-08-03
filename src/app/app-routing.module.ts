import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';

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
    path: APP_ROUTES.VERIFY,
    loadChildren: () =>
      import('./Customer/verify+/verify.module').then((m) => m.VerifyModule),
  },
  {
    path: APP_ROUTES.RESTAURANT,
    loadChildren: () =>
      import('./Restaurant/restaurant.module').then((m) => m.RestaurantModule),
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
