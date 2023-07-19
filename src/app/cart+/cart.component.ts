import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestaurantDetailsState } from '../store/restaurant-details/interfaces/restaurant-details.interface';
import { RestaurantDetailsFacade } from '../store/restaurant-details/restaurant-details.facade';
import { IAddress } from '../store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantDetails!: IRestaurantDetailsState;
  isDesktop!: boolean;
  activeSlideName = 'menu';

  addressList: Array<IAddress> = [
    {
      id: 1,
      imgUrl: './../../../../assets/profile/map.png',
      imgAlt: 'Map',
      country: 'USA',
      state: 'New York',
      city: 'New York',
      address1: '4517 Washington Ave.',
      address2: 'Manchester',
      pinCode: '11004',
    },
    {
      id: 2,
      imgUrl: './../../../../assets/profile/map.png',
      imgAlt: 'Map',
      country: 'USA',
      state: 'California',
      city: 'San Deigo',
      address1: '3891 Ranchview ontario Dr.',
      address2: 'Richardson',
      pinCode: '62639',
    },
  ];

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
