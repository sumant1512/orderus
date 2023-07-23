import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestaurantDetailsState } from '../store/restaurant-details/interfaces/restaurant-details.interface';
import { RestaurantDetailsFacade } from '../store/restaurant-details/restaurant-details.facade';
import { IAddress } from '../store/user-info/interfaces/user-info.interface';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantDetails!: IRestaurantDetailsState;
  activeSlideName = 'delivery';

  selectedDeliveryAddessId = 0;

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getRestaurantDetails();
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

  getRestaurantDetails(): void {
    this.subscription.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.restaurantDetailsFacade.fetchRestaurantDetails(
          params.get('id') as string
        );
      })
    );
  }

  onSectionSelect(section: string): void {
    this.activeSlideName = section;
  }

  onDeliveryAddressSelect(id: number): void {
    this.selectedDeliveryAddessId = id;
  }

  navigateToCheckout(): void {
    this.router.navigate([APP_ROUTES.CHECKOUT]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
