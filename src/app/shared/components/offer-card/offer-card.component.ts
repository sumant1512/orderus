import { Component, Input } from '@angular/core';
import { IOfferCardDetails } from '../../interfaces/offer-card.interface';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() cardDetails!: IOfferCardDetails;
}
