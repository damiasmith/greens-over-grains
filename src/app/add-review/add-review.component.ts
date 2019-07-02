import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';

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
      restaurantName: [''],
      id: ['', Validators.required],
      filters: this.addCheckboxes(),
      rating: ['', Validators.required]
    });
    console.log(this.form.controls.id.value);

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

  getName(id) {
    id = this.form.controls.id.value;
    console.log(id);
    let displayRestaurant = this.restaurants.find(restaurant => restaurant.id === id).restaurantName;
    if (displayRestaurant) {
      console.log(displayRestaurant);
      return displayRestaurant;
   } else {
      return '';
  }
}

  get f() { return this.form.controls; }

  onAdd() {
    this.submitted = !this.submitted;
    if (this.form.invalid) {
      return;
    } else if (this.form.valid) {
      const foodItem = this.form.value;
      this.addFoodItemService.addFoodItems({...foodItem, filters: this.addFilters(foodItem.filters),
        restaurantName: this.getName(foodItem.id)});
      this.form.reset();
    }
  }
}

