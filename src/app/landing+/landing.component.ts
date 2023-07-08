import { Component } from '@angular/core';
import { IOfferCardDetails } from '../shared/interfaces/offer-card.interface';
import { IProductThumbnail } from '../shared/interfaces/product-thumbnail.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
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
}
