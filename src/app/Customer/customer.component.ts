import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/services/theme/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  isHeaderFooterActive = true;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.themeService.setThemeOnStart();
  }

  ngOnInit(): void {
    this.getRouterEvents();
  }

  getRouterEvents(): void {
    this.router.events.subscribe(() => {
      this.isHeaderFooterActive = [
        APP_ROUTES.LOGIN,
        APP_ROUTES.REGISTRATION,
        APP_ROUTES.FORGET_PASSWORD,
        APP_ROUTES.VERIFY,
      ].includes(this.route.snapshot.firstChild?.routeConfig?.path || '');
    });
  }
}
