import { Component, Input } from '@angular/core';
import { IOffers } from 'src/app/store/offers/interfaces/offers.interface';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() cardDetails!: IOffers;
}
