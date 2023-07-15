import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemFilter } from 'src/app/store/item-filter/interfaces/item-filter.interface';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],
})
export class ProductThumbnailComponent {
  @Input() itemDetails!: IItemFilter;
  @Input() tabIndex!: number;

  @Output() onItemSelect = new EventEmitter<number>();

  selectItem(id: number): void {
    this.onItemSelect.emit(id);
  }
}
