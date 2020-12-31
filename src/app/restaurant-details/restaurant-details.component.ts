import { Component, OnInit } from '@angular/core';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { Restaurant } from '../services/restaurant.interface';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurants = {};
  restaurant;
  foodItems;
  displayFoodItems = [];

  filters = [
    'gluten-free',
    'vegetarian',
    'vegan',
    'pescatarian',
    'lactose-free'
  ];

  activeFilters = [];

  constructor(
    private restaurantInfoService: RestaurantInfoService,
    private addFoodItemService: AddFoodItemService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => console.log(params));
    }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.restaurantInfoService.getRestaurant(id),
      this.addFoodItemService.getFoodItems(id)
    )
    .subscribe(([restaurantsInfo, restaurant, foodItems]) => {
      this.restaurants = restaurantsInfo.reduce((accumulator, current) => {
        accumulator[current._id] = current;
        return accumulator;
      }, {});
      console.log(this.restaurants);
      this.restaurant = restaurant;
      this.foodItems = foodItems;
      this.displayFoodItems = this.foodItems;
      console.log(this.displayFoodItems);
      
      });
    }

  onFilter(toggleFilter: string) {
    const index = this.activeFilters.findIndex(f => f === toggleFilter);
    if (index !== -1) {
      this.activeFilters.splice(index, 1);
     } else {
      this.activeFilters.push(toggleFilter);
     }
    this.displayFoodItems = this.foodItems
    .filter(foodItem => this.activeFilters
      .every(f => foodItem.filters.includes(f)));
  }
}
