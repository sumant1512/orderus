import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.scss'],
})
export class AddNewCardComponent {
  @Input() label: string = 'New';
}
