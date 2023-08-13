import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { ITab } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit {
  @Input() tabList!: Array<ITab>;

  @Output() selectedTab = new EventEmitter<ITab>();
  selectedTabIndex = 0;

  ngOnInit(): void {
    this.onTabSelect(this.selectedTabIndex);
  }

  onTabSelect(id: number): void {
    this.selectedTabIndex = id;
    this.selectedTab.emit(this.tabList[this.selectedTabIndex]);
  }
}
