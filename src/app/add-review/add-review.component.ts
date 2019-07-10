
import { Component, OnInit} from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { FoodItem } from '../services/food-item.interface';
import { Restaurant } from '../services/restaurant.interface';

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
  restaurants = [];

  submitted = false;

  constructor(
    private addFoodItemService: AddFoodItemService,
    private restaurantInfoService: RestaurantInfoService,
    private fb: FormBuilder
    ) {
  }

  ngOnInit() {
    this.form = this.fb.group ({
      itemName: ['', Validators.required],
      restaurantId: ['', Validators.required],
      filters: this.addCheckboxes(),
      rating: ['', Validators.required]
    });

    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    )
    .subscribe(([restaurants, foodItems]) => {
      this.restaurants = restaurants;
      this.foodItems = foodItems;
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

  get f() { return this.form.controls; }

  onAdd(itemName, restaurantId, filters, rating) {
    this.submitted = true;
    filters = (this.form.controls.filters.value);
    itemName = this.form.controls.itemName.value;
    restaurantId = this.form.controls.restaurantId.value;
    rating = this.form.controls.rating.value;
    if (this.form.invalid) {
      return;
    } else if (this.form.valid)  {
      filters = this.addFilters(filters);
      this.addFoodItemService.addFoodItems(itemName, restaurantId, filters, rating);
      this.form.reset();
      this.submitted = !this.submitted;
    }
  }
}

