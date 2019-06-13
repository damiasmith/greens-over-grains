import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { RestaurantInfoService } from './restaurant-info.service';
import { AddFoodItemService } from './add-food-item.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  searchResults = new BehaviorSubject<Array<any>>([]);

  constructor(
    private restaurantInfoService: RestaurantInfoService,
    private addFooditemService: AddFoodItemService
  ) { }

  onResults() {
    return this.searchResults.asObservable();
  }

  search(value: string) {
    let restaurants;
    let foodItems;
    const results = [];
    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.addFooditemService.getFoodItems()
    )
    .subscribe(([restaurantsInfo, addFoodItems]) => {
      restaurants = restaurantsInfo;
      foodItems = addFoodItems;
      return {restaurants, foodItems};
    });

    for (let foodItem of foodItems) {
      if (foodItem.itemName.toLowerCase() === value.toLowerCase()) {
        results.push( foodItem );
      } else if ( foodItem.filters.find(filter => filter.toLowerCase() === value.toLowerCase())) {
        results.push( foodItem );
      } else if ( foodItem.restaurantName.toLowerCase() === value.toLowerCase()) {
        results.push( foodItem );
      }
    }

    for (let restaurant of restaurants) {
      if (restaurant.restaurantName.toLowerCase() === value.toLowerCase() ) {
        results.push( restaurant );
      }
    }
    this.searchResults.next(results);
  }
}
