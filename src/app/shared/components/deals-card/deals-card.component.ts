import { Component, Input } from '@angular/core';
import { IDealCardDetail } from '../../interfaces/deal-card.interface';
import { EDealBtn } from '../../enum/deal-btn.enum';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss'],
})
export class DealsCardComponent {
  btnType = EDealBtn;
  @Input() dealCardDetails!: IDealCardDetail;
}
