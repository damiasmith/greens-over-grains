import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddFoodItemService } from './services/add-food-item.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {
  form = new FormGroup ({
    itemName: new FormControl('', Validators.required),
    restaurantName: new FormControl('', Validators.required),
    // filter: new FormGroup()
  });


  constructor(
    private service: AddFoodItemService,
  ) { }

  ngOnInit() {

  }

  onAdd() {
   this.service.addFoodItems(this.form.value);
   console.log(this.form.value);

  }
}

