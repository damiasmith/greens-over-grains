import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Restaurant } from '../services/restaurant.interface';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../services/food-item.interface';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  foodItems = [];
  displayFoodItems = [];

  filters = [
    'gluten-free',
    'vegetarian',
    'vegan',
    'pescatarian',
    'lactose-free'
  ];

  activeFilters = [];

  restaurant: Restaurant;
  foodItem: FoodItem;

  searchResults = [];

  constructor(
    private restaurantInfoService: RestaurantInfoService,
    private addFoodItemService: AddFoodItemService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => console.log(params));
    }

  ngOnInit() {
    this.restaurantInfoService.getRestaurant(+this.route.snapshot.paramMap.get('id'))
    .subscribe(restaurantInfo => { this.restaurant = restaurantInfo;
    });
    this.addFoodItemService.getFoodItem(+this.route.snapshot.paramMap.get('id'))
    .subscribe(addFoodItems => { this.foodItem = addFoodItems;
    });
    console.log(this.foodItem);
  }

  onFilter(toggleFilter: string) {
    const index = this.activeFilters.findIndex(f => f === toggleFilter);
    if (index !== -1) {
      this.activeFilters.splice(index, 1);
     } else {
      this.activeFilters.push(toggleFilter);
     }
    console.log(this.activeFilters);
    this.displayFoodItems = this.foodItems
    .filter(foodItem => this.activeFilters
      .every(f => foodItem.filters.includes(f)));
  }
}
