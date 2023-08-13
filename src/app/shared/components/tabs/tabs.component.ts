import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ITab } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent {
  @Input() tabList!: Array<ITab>;

  @Output() selectedTab = new EventEmitter<ITab>();
  selectedTabIndex = 0;

  onTabSelect(id: number): void {
    this.selectedTabIndex = id;
    this.selectedTab.emit(this.tabList[this.selectedTabIndex]);
  }
}
