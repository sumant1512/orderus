import { Component } from '@angular/core';
import { IOfferCardDetails } from '../shared/interfaces/offer-card.interface';

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
}
