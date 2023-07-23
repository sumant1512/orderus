import { Component, Input } from '@angular/core';
import { IMenuItemCard } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';

@Component({
  selector: 'app-cart-menu-card',
  templateUrl: './cart-menu-card.component.html',
  styleUrls: ['./cart-menu-card.component.scss'],
})
export class CartMenuCardComponent {
  @Input() menuItem!: IMenuItemCard;
  @Input() isCountChangeEnabled: boolean = true;
  @Input() isCountLabelEnabled: boolean = false;
  @Input() isLast!: boolean;
  itemCount = 0;

  updateProductCount(action: string): void {
    if (action === 'add') {
      this.itemCount += 1;
    }
    if (action === 'sub' && this.itemCount > 0) {
      this.itemCount -= 1;
    }
  }
}
