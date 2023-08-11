import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.scss'],
})
export class AddIconComponent {
  @Input() color: string = 'black';
}
