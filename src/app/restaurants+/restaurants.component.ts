import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRestaurantCardDetail } from '../shared/interfaces/restaurant-card-details.interface';
import { IProductThumbnail } from '../shared/interfaces/product-thumbnail.interface';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {
  restaurantLoaded = 0;
  restaurantList: Array<IRestaurantCardDetail> = [
    {
      id: 1,
      name: 'Royal Sushi House',
      imgUrl: './../../assets/restaurant-card/restaurant-1.png',
      imgAlt: 'Restaurant',
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
    },
    {
      id: 2,
      name: 'Burgers & Pizza',
      imgUrl: './../../assets/restaurant-card/restaurant-2.png',
      imgAlt: 'Restaurant',
      deliveryTime: '40-60 min',
      minimumPrice: '$24 min sum',
      productList: [
        {
          imgUrl: './../../assets/restaurant-card/pizza.png',
          imgAlt: 'Pizza',
          name: 'Pizza',
        },
        {
          imgUrl: './../../assets/restaurant-card/burger.png',
          imgAlt: 'Burger',
          name: 'Burger',
        },
      ],
      cartProducts: ['one', 'two'],
    },
    {
      id: 3,
      name: 'Ninja sushi',
      imgUrl: './../../assets/restaurant-card/restaurant-3.png',
      imgAlt: 'Restaurant',
      deliveryTime: '20-40 min',
      minimumPrice: '$40 min sum',
      productList: [
        {
          imgUrl: './../../assets/restaurant-card/sushi.png',
          imgAlt: 'Sushi',
          name: 'Sushi',
        },
      ],
    },
    {
      id: 4,
      name: 'Sushi master',
      imgUrl: './../../assets/restaurant-card/restaurant-4.png',
      imgAlt: 'Restaurant',
      deliveryTime: '60-70 min',
      minimumPrice: '$49 min sum',
      productList: [
        {
          imgUrl: './../../assets/restaurant-card/sushi.png',
          imgAlt: 'Sushi',
          name: 'Sushi',
        },
      ],
    },
    {
      id: 5,
      name: 'Japanese sushi',
      imgUrl: './../../assets/restaurant-card/restaurant-5.png',
      imgAlt: 'Restaurant',
      deliveryTime: '30-50 min',
      minimumPrice: '$104 min sum',
      productList: [
        {
          imgUrl: './../../assets/restaurant-card/sushi.png',
          imgAlt: 'Sushi',
          name: 'Sushi',
        },
      ],
    },
    {
      id: 6,
      name: 'Kobe',
      imgUrl: './../../assets/restaurant-card/restaurant-6.png',
      imgAlt: 'Restaurant',
      deliveryTime: '20-30 min',
      minimumPrice: '$57 min sum',
      productList: [
        {
          imgUrl: './../../assets/restaurant-card/sushi.png',
          imgAlt: 'Sushi',
          name: 'Sushi',
        },
      ],
      cartProducts: ['one'],
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

  restaurantListCopy = this.restaurantList;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
