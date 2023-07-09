import { Component } from '@angular/core';
import { IDealCardDetail } from '../shared/interfaces/deal-card.interface';
import { EDealBtn } from '../shared/enum/deal-btn.enum';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent {
  dealsList: Array<IDealCardDetail> = [
    {
      btnType: EDealBtn.ACTIVE,
      imgUrl: './../../assets/deals-card/deal-1.jpg',
      imgAlt: 'sandwich',
      name: '20% off on Vegan sandwiched every Saturday this Summer',
      validity: {
        validityStartsFrom: new Date().toISOString(),
        validityEndsOn: new Date().toDateString(),
        validityInfo: 'Saturday Only',
      },
      restaurantType: 'Vegfood',
    },
    {
      btnType: EDealBtn.SCHEDULED,
      imgUrl: './../../assets/deals-card/deal-1.jpg',
      imgAlt: 'sandwich',
      name: '20% off on Vegan sandwiched every Saturday this Summer',
      validity: {
        validityStartsFrom: new Date().toISOString(),
        validityEndsOn: new Date().toDateString(),
      },
      restaurantType: 'Vegfood',
    },
    {
      btnType: EDealBtn.EXPIRED,
      imgUrl: './../../assets/deals-card/deal-1.jpg',
      imgAlt: 'sandwich',
      name: '20% off on Vegan sandwiched every Saturday this Summer',
      validity: {
        validityStartsFrom: new Date().toISOString(),
        validityEndsOn: new Date().toDateString(),
      },
      restaurantType: 'Vegfood',
    },
  ];
}
