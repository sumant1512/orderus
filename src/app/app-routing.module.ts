import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.HOME, pathMatch: 'full' },
  {
    path: APP_ROUTES.HOME,
    loadChildren: () =>
      import('./landing+/landing.module').then((m) => m.LandingModule),
  },
  { path: '**', redirectTo: APP_ROUTES.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
