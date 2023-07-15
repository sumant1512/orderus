import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestaurantCardDetail } from '../shared/interfaces/restaurant-card-details.interface';
import { RestaurantFacade } from '../store/restaurant/restaurant.facade';
import { ItemFilterFacade } from '../store/item-filter/item-filter.facade';
import { IItemFilter } from '../store/item-filter/interfaces/item-filter.interface';
import { ItemFilterPipe } from '../shared/pipes/item-filter.pipe';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  restaurantLoaded = 0;
  restaurantList!: Array<IRestaurantCardDetail>;
  initialRestaurantList!: Array<IRestaurantCardDetail>;

  itemFilterList: Array<IItemFilter> = [];

  constructor(
    private itemFilterFacade: ItemFilterFacade,
    private restaurantFacade: RestaurantFacade,
    private itemFilter: ItemFilterPipe,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.itemFilterFacade.fetchItemFilter();
    this.restaurantFacade.fetchRestaurant();
  }

  ngOnInit(): void {
    this.getItemFilterList();
    this.getRestaurantList();
  }

  getItemFilterList(): void {
    this.subscription.add(
      this.itemFilterFacade.itemFilterListState.subscribe((list) => {
        this.itemFilterList = list;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  loadMoreRestaurants(event: boolean): void {
    if (event) {
      this.restaurantLoaded = this.restaurantLoaded + 1;
      this.restaurantList = [
        ...this.restaurantList,
        ...this.initialRestaurantList,
      ];
    }
  }

  navigateToRestaurantDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }
}
