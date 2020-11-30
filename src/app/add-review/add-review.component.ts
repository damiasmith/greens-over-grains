import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  closed = false;

  constructor(
    private addFoodItemService: AddFoodItemService,
    private restaurantInfoService: RestaurantInfoService,
    private fb: FormBuilder,
    private modalService: NgbModal
    ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      itemName: ['', Validators.required],
      id: ['', Validators.required],
      filters: this.addCheckboxes(),
      rating: ['', Validators.required]
    });
    console.log('form', this.form);

    combineLatest ([
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    ])
    .subscribe(([restaurants, foodItems]) => {
      this.restaurants = restaurants;
      this.foodItems = foodItems;
  });
  }

 addCheckboxes() {
    const arr = this.filters.map(filter => {
      return new FormControl(filter.selected || false);
    });
    console.log('arr', arr);
    return new FormArray(arr);
  }

  addFilters(selected: boolean[]) {
    return this.filters.filter((filter, index) => selected[index]
    ).map(filter => filter.name);
  }
  get f() { return this.form.controls; }

  getName(id) {
    id = this.form.controls.id.value;
    if (id) {
      console.log(id);
      const displayRestaurant = this.restaurants.find(restaurant => restaurant.id === id).restaurantName;
      if (displayRestaurant) {
        console.log(displayRestaurant);
        return displayRestaurant;
    } else {
        return '';
      }
    }
  }

  onAdd() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else 
    if (this.form.valid) {
      const foodItem = this.form.value;
      console.log(this.filters);
      this.addFoodItemService.addFoodItems({...foodItem, filters: this.addFilters(foodItem.filters),
        restaurantName: this.getName(foodItem.id)});
      this.submitted = !this.submitted;
    }
  }

  open(content) { 
    if (this.form.invalid) {
      return;
    } else if (this.form.valid) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}) 
    }
  }

  close() {
    if (this.closed == false) {
      this.closed = true;
      this.form.reset();
    }
  }
}

