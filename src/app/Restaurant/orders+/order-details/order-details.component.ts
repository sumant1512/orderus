import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';
import { IRestaurantDetailsState } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';
import { RestaurantDetailsFacade } from 'src/app/store/restaurant-details/restaurant-details.facade';
import {
  IPayment,
  IAddress,
} from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  subscription = new Subscription();
  restaurantDetails!: IRestaurantDetailsState;
  activeSlideName = 'delivery';
  lat = 51.678418;
  lng = 7.809007;

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555,
  };
  zoom = 6;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

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
      img: './../../../../assets/profile/map.png',
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
      img: './../../../../assets/profile/map.png',
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

  navigateToRestaurantOrders(): void {
    this.router.navigate([
      `${APP_ROUTES.RESTAURANT.PARENT}/${APP_ROUTES.RESTAURANT.CHILD_ROUTES.ORDERS}`,
    ]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
