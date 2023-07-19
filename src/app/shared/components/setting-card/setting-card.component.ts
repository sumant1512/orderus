import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISettings } from '../../interfaces/settings.interface';
import { EHeadingType } from '../../enum/heading-type.enum';

@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.scss'],
})
export class SettingCardComponent {
  headingTypeList = EHeadingType;
  @Input() settingDetails!: ISettings;
  @Input() isSelected: boolean = false;

  @Output() selectedCardEvent = new EventEmitter<number>();

  getSelectedIcon(imgUrl: string): string {
    const pathArr = imgUrl.split('/');
    const position = pathArr.length - 1;
    const lightPath = 'light';
    pathArr.splice(position, 0, lightPath);
    return pathArr.join('/');
  }

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }
}
