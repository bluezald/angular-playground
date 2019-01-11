import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
    // the rating in decimal * 75 (the width in px
    // for the template ui divide by the number of stars)
    console.log(`${this.starWidth}`);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating is ${this.rating}`);
  }

}
