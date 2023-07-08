import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
