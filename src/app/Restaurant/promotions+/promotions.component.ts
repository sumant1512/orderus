import { Component } from '@angular/core';
import { EDealBtn } from 'src/app/shared/enum/deal-btn.enum';
import { IDealCardDetail } from 'src/app/shared/interfaces/deal-card.interface';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent {
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: 'active' },
    { id: 2, name: 'Scheduled', code: 'scheduled' },
    { id: 1, name: 'Expired', code: 'expired' },
  ];
  promotionsList: Array<IDealCardDetail> = [
    {
      btnType: EDealBtn.ACTIVE,
      img: './../../assets/deals-card/deal-1.jpg',
      imgAlt: 'sandwich',
      name: '20% off on Vegan sandwiched',
      validity: {
        validityStartsFrom: new Date('7/1/2023').toDateString(),
        validityEndsOn: new Date('7/1/2024').toDateString(),
        validityInfo: 'Saturday Only',
      },
      restaurantType: 'Vegfood',
    },
    {
      btnType: EDealBtn.ACTIVE,
      img: './../../assets/deals-card/deal-2.jpg',
      imgAlt: 'sandwich',
      name: '5% off on all meals every Wednesday',
      validity: {
        validityStartsFrom: new Date('7/1/2023').toDateString(),
        validityEndsOn: new Date('7/1/2024').toDateString(),
        validityInfo: 'Wednesday Only',
      },
      restaurantType: 'Parallax Restaurant',
    },
    {
      btnType: EDealBtn.ACTIVE,
      img: './../../assets/deals-card/deal-3.jpg',
      imgAlt: 'sandwich',
      name: 'Free Pepsi on order above $50',
      validity: {
        validityStartsFrom: new Date('7/1/2023').toDateString(),
        validityEndsOn: new Date('7/30/2024').toDateString(),
      },
      restaurantType: 'Sur un Arbere Perche',
    },
    {
      btnType: EDealBtn.ACTIVE,
      img: './../../assets/deals-card/deal-4.jpg',
      imgAlt: 'sandwich',
      name: 'Get extra Pizza on order above $200',
      validity: {
        validityStartsFrom: new Date('7/1/2023').toDateString(),
        validityEndsOn: new Date('7/30/2023').toDateString(),
      },
      restaurantType: 'Norma"s',
    },
    {
      btnType: EDealBtn.SCHEDULED,
      img: './../../assets/deals-card/deal-5.jpg',
      imgAlt: 'sandwich',
      name: '10% off on all order above $300',
      validity: {
        validityStartsFrom: new Date('8/1/2023').toDateString(),
        validityEndsOn: new Date('12/1/2023').toDateString(),
      },
      restaurantType: 'Ithaa',
    },
    {
      btnType: EDealBtn.SCHEDULED,
      img: './../../assets/deals-card/deal-6.jpg',
      imgAlt: 'sandwich',
      name: '30% off on all vegan meals every Monday',
      validity: {
        validityStartsFrom: new Date('8/15/2023').toDateString(),
        validityEndsOn: new Date('10/15/2023').toDateString(),
        validityInfo: 'Monday Only',
      },
      restaurantType: 'Vegfood',
    },
    {
      btnType: EDealBtn.EXPIRED,
      img: './../../assets/deals-card/deal-7.jpg',
      imgAlt: 'burger',
      name: 'Free burger and fries on order above $120',
      validity: {
        validityStartsFrom: new Date('4/17/2023').toDateString(),
      },
      restaurantType: 'Vegfood',
    },
    {
      btnType: EDealBtn.EXPIRED,
      img: './../../assets/deals-card/deal-8.jpg',
      imgAlt: 'sushi',
      name: 'Free sushi roll on order above $200',
      validity: {
        validityStartsFrom: new Date('4/16/2023').toDateString(),
      },
      restaurantType: 'Vegfood',
    },
    {
      btnType: EDealBtn.EXPIRED,
      img: './../../assets/deals-card/deal-9.jpg',
      imgAlt: 'sandwich',
      name: '25% off on all Deserts (Chef"s Birthday)',
      validity: {
        validityStartsFrom: new Date('4/15/2023').toDateString(),
      },
      restaurantType: 'Vegfood',
    },
  ];

  getSelectedPromotion(selectedSection: ITab): void {
    console.log(selectedSection);
  }
}
