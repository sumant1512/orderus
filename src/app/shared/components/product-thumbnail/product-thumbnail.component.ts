import { Component, Input } from '@angular/core';
import { IProductThumbnail } from '../../interfaces/product-thumbnail.interface';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],
})
export class ProductThumbnailComponent {
  @Input() thumbnailDetails!: IProductThumbnail;
  @Input() tabIndex!: number;
}
