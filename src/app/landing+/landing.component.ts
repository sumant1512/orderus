import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRestaurantCardDetail } from '../shared/interfaces/restaurant-card-details.interface';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { Subscription } from 'rxjs';
import { RestaurantFacade } from '../store/restaurant/restaurant.facade';
import { ItemFilterFacade } from '../store/item-filter/item-filter.facade';
import { IItemFilter } from '../store/item-filter/interfaces/item-filter.interface';
import { ItemFilterPipe } from '../shared/pipes/item-filter.pipe';
import { IOffers } from '../store/offers/interfaces/offers.interface';
import { OffersFacade } from '../store/offers/offers.facade';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantLoaded = 0;
  restaurantList!: Array<IRestaurantCardDetail>;
  initialRestaurantList!: Array<IRestaurantCardDetail>;

  offerCardList: Array<IOffers> = [];

  itemFilterList: Array<IItemFilter> = [];

  constructor(
    private offersFacade: OffersFacade,
    private itemFilterFacade: ItemFilterFacade,
    private restaurantFacade: RestaurantFacade,
    private itemFilter: ItemFilterPipe,
    private router: Router
  ) {
    this.offersFacade.fetchOffersList();
    this.itemFilterFacade.fetchItemFilter();
    this.restaurantFacade.fetchRestaurant();
  }

  ngOnInit(): void {
    this.getOffers();
    this.getItemFilterList();
    this.getRestaurantList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOffers(): void {
    this.subscription.add(
      this.offersFacade.offersListState.subscribe((list) => {
        this.offerCardList = list;
      })
    );
  }

  getItemFilterList(): void {
    this.subscription.add(
      this.itemFilterFacade.itemFilterListState.subscribe((list) => {
        this.itemFilterList = list;
      })
    );
  }

  getRestaurantList(): void {
    this.subscription.add(
      this.restaurantFacade.restaurantListState.subscribe((list) => {
        this.restaurantList = list;
        this.initialRestaurantList = list;
      })
    );
  }

  filterRestaurant(itemId: number): void {
    this.restaurantList = this.itemFilter.transform(
      this.initialRestaurantList,
      itemId
    );
  }

  loadMoreRestaurants(): void {
    this.restaurantLoaded = this.restaurantLoaded + 1;
    this.restaurantList = [
      ...this.restaurantList,
      ...this.initialRestaurantList,
    ];
  }

  navigateToRestaurantDetails(id: number): void {
    this.router.navigate([APP_ROUTES.RESTAURANTS, id]);
  }
}
