import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestaurantCardDetail } from '../shared/interfaces/restaurant-card-details.interface';
import { IProductThumbnail } from '../shared/interfaces/product-thumbnail.interface';
import { RestaurantFacade } from '../store/restaurant/restaurant.facade';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantLoaded = 0;
  restaurantList!: Array<IRestaurantCardDetail>;
  restaurantListCopy!: Array<IRestaurantCardDetail>;

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
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }
}
