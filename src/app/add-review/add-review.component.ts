import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AddFoodItemService } from '../services/add-food-item.service';
import { FoodItem } from '../services/food-item.interface';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {
  form: FormGroup;
  filters = [
    {name: 'gluten-free', selected: false, id: 1},
    {name: 'vegetarian', selected: false, id: 2},
    {name: 'vegan', selected: false, id: 3},
    {name: 'pescatarian', selected: false, id: 4},
    {name: 'lactose-free', selected: false, id: 5}
  ];

  foodItems = [];
  displayFoodItems = [];
  submitted = false;

  constructor(
    private service: AddFoodItemService,
    private fb: FormBuilder
    ) {
  }

  ngOnInit() {
    this.service.getAddedFoodItem()
    .subscribe(foodItems => { this.foodItems = foodItems,
      this.displayFoodItems = this.foodItems;
    });

    this.form = this.fb.group ({
      itemName: ['', Validators.required],
      restaurantName: ['', Validators.required],
      filters: this.addCheckboxes(),
      rating: ['', Validators.required]
    });
  }

 addCheckboxes() {
    const arr = this.filters.map(filter => {
      return this.fb.control(filter.selected);
    });
    return this.fb.array(arr);
  }

  addFilters(selected: boolean[]) {
    return this.filters.filter((filter, index) => selected[index]
    ).map(filter => filter.name);
  }

  onAdd() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else if (this.form.valid) {
      const foodItem = this.form.value;
      this.service.addFoodItems({...foodItem, filters: this.addFilters(foodItem.filters)});
      this.form.reset();
    }
    console.log(this.displayFoodItems);
  }
}

