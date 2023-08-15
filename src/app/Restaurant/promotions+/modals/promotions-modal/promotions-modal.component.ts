import { Component, Input } from '@angular/core';
import { PromotionsForm } from './promotions.form';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { IImage } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-promotions-modal',
  templateUrl: './promotions-modal.component.html',
  styleUrls: ['./promotions-modal.component.scss'],
})
export class PromotionsModalComponent {
  @Input() action!: IAction;
  @Input() selectedPromotionId!: number;
  @Input() modal!: any;

  userInfo: IImage = {
    img: './../../../../../assets/menu-card/item-1.jpg',
    imgAlt: 'Item',
  };

  promotionsForm = PromotionsForm();

  itemAction(modal: any): void {
    this.modal.close();
    switch (this.action.id) {
      case EAction.Add:
        console.log(this.promotionsForm.value);
        break;
      case EAction.Edit:
        const updateReqBody = {
          id: this.selectedPromotionId,
          ...this.promotionsForm.value,
        };
        console.log(updateReqBody);
        break;
      default:
        break;
    }
  }
}
