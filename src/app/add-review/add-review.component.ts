import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  food = new FormGroup({
    'item-name': new FormControl(),
    'restaurant-name': new FormControl(),
    filter: new FormGroup({
      'gluten-free': new FormControl(),
      vegetarian: new FormControl(),
      vegan: new FormControl(),
      pescatarian: new FormControl(),
    }),
    rating: new FormGroup({
      'one-star': new FormControl(),
      'two-star': new FormControl(),
      'tree-star': new FormControl(),
      'four-star': new FormControl(),
      'five-star': new FormControl(),
    }),
    'image-file': new FormControl(),
  });
  
  selectedFile: File;
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;

  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // upload code goes here
  }
}

