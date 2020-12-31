import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { RestaurantInfoService } from './restaurant-info.service';
import { AddFoodItemService } from './add-food-item.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService implements OnInit {
  searchResults = new BehaviorSubject<Array<any>>([]);

  constructor(
    private restaurantInfoService: RestaurantInfoService,
    private addFoodItemService: AddFoodItemService
  ) { }

  ngOnInit() {
  }

  onResults() {
    return this.searchResults.asObservable();
  }

  search(value: string) {
    let results = [];
    let restaurants = [];
    let restaurant = {};
    let foodItems = [];

    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    )
    .subscribe(([restaurantsInfo, addFoodItems]) => {
      restaurant = restaurantsInfo.reduce((accumulator, current) => {
        accumulator[current._id] = current;
        return accumulator;
      }, {});
      restaurants = restaurantsInfo;
      foodItems = addFoodItems;

      for (let foodItem of foodItems) {
        if (foodItem.itemName.toLowerCase() === value.toLowerCase()) {
            results.push( foodItem );
        } else if ( foodItem.filters.find(filter => filter.toLowerCase() === value.toLowerCase())) {
            results.push( foodItem )
        }
      }
      for (let restaurant of restaurants) {
        if (restaurant.restaurantName.toLowerCase() === value.toLowerCase() ) {
          results.push( restaurant );
        }
      }

      for (let foodItem of foodItems) {
        if (restaurant[foodItem.restaurantId].restaurantName.toLowerCase() === value.toLowerCase()) {
          results.push( foodItem );
        }
        this.searchResults.next(results);
        console.log(results);
      }
    });
  }
}
