import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestaurantDetailsState } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';
import { RestaurantDetailsFacade } from 'src/app/store/restaurant-details/restaurant-details.facade';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantDetails!: IRestaurantDetailsState;
  isDesktop!: boolean;
  activeSlideName = 'menu';

  constructor(
    private restaurantDetailsFacade: RestaurantDetailsFacade,
    private activatedRoute: ActivatedRoute
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
