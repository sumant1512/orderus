import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from 'src/app/store/restaurant/interfaces/restaurant.interface';

@Pipe({
  name: 'itemFilter',
})
export class ItemFilterPipe implements PipeTransform {
  transform(
    restaurantList: Array<IRestaurant>,
    searchId: number
  ): Array<IRestaurant> {
    if (!restaurantList) return [];
    if (!searchId) return restaurantList;

    let initialRestaurantList: Array<IRestaurant> = [];
    restaurantList.forEach((restraunt) => {
      restraunt?.productList?.filter((item) => {
        if (item.id === searchId) {
          initialRestaurantList.push(restraunt);
        }
      });
    });
    return initialRestaurantList;
  }
}
