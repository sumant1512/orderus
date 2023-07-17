import { Component, Input } from '@angular/core';
import { EHeadingType } from '../../enum/heading-type.enum';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
  @Input() label!: string;
  @Input() headingType: string = EHeadingType.H3;

  headingTypeList = EHeadingType;
}
