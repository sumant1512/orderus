import { Component, Input } from '@angular/core';
import { IDropdown } from '../../interfaces/dropdown.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() dropdownList!: Array<IDropdown>;
}
