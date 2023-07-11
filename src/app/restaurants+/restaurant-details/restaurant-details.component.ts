import { Component } from '@angular/core';
import { IRestaurantDetails } from 'src/app/shared/interfaces/restaurant-details.interface';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent {
  restaurantDetails: IRestaurantDetails = {
    id: 1,
    name: 'Royal Sushi House',
    imgUrl: './../../assets/restaurant-card/restaurant-1.png',
    imgAlt: 'Restaurant',
    thumbnailImage: {
      imgUrl: './../../../assets/restaurant-details/restaurant_detail-1.jpg',
      imgAlt: 'Restaurant',
    },
    deliveryTime: '30-40 min',
    minimumPrice: '$32 min sum',
    productList: [
      {
        imgUrl: './../../assets/restaurant-card/sushi.png',
        imgAlt: 'Sushi',
        name: 'Sushi',
      },
    ],
    cartProducts: [],
  };
}
