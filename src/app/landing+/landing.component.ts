import { Component, OnDestroy, OnInit } from '@angular/core';
import { IOfferCardDetails } from '../shared/interfaces/offer-card.interface';
import { IProductThumbnail } from '../shared/interfaces/product-thumbnail.interface';
import { IRestaurantCardDetail } from '../shared/interfaces/restaurant-card-details.interface';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { Subscription } from 'rxjs';
import { RestaurantFacade } from '../store/restaurants/restaurant.facade';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantLoaded = 0;
  restaurantList!: Array<IRestaurantCardDetail>;
  restaurantListCopy!: Array<IRestaurantCardDetail>;

  offerCardList: Array<IOfferCardDetails> = [
    {
      offerCardImage: './../../assets/icecream.png',
      offerCardImageAlt: 'Icecream',
      offerCardHeader: 'All Deserts',
      offer: '20% OFF',
      typeLabel: 'Deserty',
      type: 'sweet',
    },
    {
      offerCardImage: './../../assets/burger.png',
      offerCardImageAlt: 'Burger',
      offerCardHeader: 'Big Burgers',
      offer: '50% OFF',
      typeLabel: 'Foodies',
      type: 'spicy',
    },
  ];

  productThumbnailList: Array<IProductThumbnail> = [
    {
      imgUrl: './../../assets/product-thumbnail/pizza.png',
      imgAlt: 'Pizza',
      name: 'Pizza',
    },
    {
      imgUrl: './../../assets/product-thumbnail/burger.png',
      imgAlt: 'Burger',
      name: 'Burger',
    },
    {
      imgUrl: './../../assets/product-thumbnail/meat.png',
      imgAlt: 'BBQ',
      name: 'BBQ',
    },
    {
      imgUrl: './../../assets/product-thumbnail/sushi.png',
      imgAlt: 'Sushi',
      name: 'Sushi',
    },
    {
      imgUrl: './../../assets/product-thumbnail/broccoli.png',
      imgAlt: 'Vegan',
      name: 'Vegan',
    },
    {
      imgUrl: './../../assets/product-thumbnail/cake.png',
      imgAlt: 'Dessarts',
      name: 'Dessarts',
    },
  ];

  constructor(
    private restaurantFacade: RestaurantFacade,
    private router: Router
  ) {
    this.restaurantFacade.fetchRestaurant();
  }

  ngOnInit(): void {
    this.getRestaurantList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getRestaurantList(): void {
    this.subscription.add(
      this.restaurantFacade.restaurantListState.subscribe((list) => {
        this.restaurantList = list;
        this.restaurantListCopy = list;
      })
    );
  }

  loadMoreRestaurants(): void {
    this.restaurantLoaded = this.restaurantLoaded + 1;
    this.restaurantList = [...this.restaurantList, ...this.restaurantListCopy];
  }

  navigateToRestaurantDetails(id: number): void {
    this.router.navigate([APP_ROUTES.RESTAURANTS, id]);
  }
}
