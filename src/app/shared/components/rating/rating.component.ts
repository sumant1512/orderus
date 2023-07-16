import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() maxRating!: number;
  @Input() currentRating!: number;

  @Output() ratingChanged = new EventEmitter<number>();

  stars!: number[];

  ngOnInit() {
    this.stars = Array(this.maxRating)
      .fill(0)
      .map((_, index) => index + 1);
  }

  rate(rating: number) {
    // this.currentRating = rating;
    this.ratingChanged.emit(this.currentRating);
  }
}
