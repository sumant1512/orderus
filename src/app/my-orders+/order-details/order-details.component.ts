import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestaurantDetailsState } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';
import { RestaurantDetailsFacade } from 'src/app/store/restaurant-details/restaurant-details.facade';
import {
  IAddress,
  IPayment,
} from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  subscription = new Subscription();
  restaurantDetails!: IRestaurantDetailsState;
  activeSlideName = 'delivery';

  paymentInfo: IPayment = {
    id: 1,
    cardNumber: '4444',
    expiryDate: '12/29',
    cardHolerName: 'Sumant Mishra',
    cardType: 'visa',
  };

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
