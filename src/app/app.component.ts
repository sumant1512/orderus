import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme/theme.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'orderus';
  isHeaderFooterActive = true;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.themeService.setThemeOnStart();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHeaderFooterActive = [
          APP_ROUTES.LOGIN,
          APP_ROUTES.REGISTRATION,
          APP_ROUTES.FORGET_PASSWORD,
        ].includes(this.route.snapshot.firstChild?.routeConfig?.path || '');
      });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
