import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';
import { IRestaurantDetailsState } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';
import { RestaurantDetailsFacade } from 'src/app/store/restaurant-details/restaurant-details.facade';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
})
export class AdminDetailsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantDetails!: IRestaurantDetailsState;
  isDesktop!: boolean;
  activeSlideName = 'menu';

  constructor(
    private restaurantDetailsFacade: RestaurantDetailsFacade,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.restaurantDetailsFacade.fetchRestaurantDetails(
        params.get('id') as string
      );
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.restaurantDetailsFacade.restaurantDetailsState.subscribe(
        (details) => {
          this.restaurantDetails = details;
        }
      )
    );
  }

  navigateToAdminList(): void {
    this.router.navigate([
      `${APP_ROUTES.SUPER_ADMIN.PARENT}/${APP_ROUTES.SUPER_ADMIN.CHILD_ROUTES.ADMINS}`,
    ]);
  }

  onSlideChange(slideName: string): void {
    this.isDesktop = this.detectDesktop();

    if (!this.isDesktop) {
      this.activeSlideName = slideName;
    } else {
      this.activeSlideName = 'menu';
    }
  }

  private detectDesktop(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return !/(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(
      userAgent
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
