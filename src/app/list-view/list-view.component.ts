import { Component, OnInit } from '@angular/core';
import { AddFoodItemService } from '../services/add-food-item.service';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {
  restaurants = {};
  restaurantbyId = [];
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

  constructor(
    private addFoodItemService: AddFoodItemService,
    private restaurantInfoService: RestaurantInfoService
    ) { }

  ngOnInit() {
    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    )
    .subscribe(([restaurantsInfo, addFoodItems]) => {
      this.restaurants = restaurantsInfo.reduce((accumulator, current) => {
        accumulator[current._id] = current;
        return accumulator;
      }, {});
      console.log(this.restaurants);
      this.foodItems = addFoodItems;
      this.displayFoodItems = this.foodItems;
      });
  }

  starRating(star) {
    return Array.from(Array(star).keys());
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

  /*restaurantLookUp(id: string) {
      let displayRestaurant = this.restaurants.find(restaurant => restaurant._id === id).restaurantName;
      if (displayRestaurant) {
        console.log(displayRestaurant);
        return displayRestaurant;
      } else {
        return '';
      }
  }*/


}
