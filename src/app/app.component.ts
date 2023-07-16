import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'orderus';

  constructor(private themeService: ThemeService) {
    this.themeService.setThemeOnStart();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
