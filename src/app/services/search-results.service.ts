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

    for (let i = 0; i < foodItems.length; i++) {
      if (foodItems[i].itemName.toLowerCase() === value.toLowerCase()) {
        results.push( foodItems[i] );
      } else if ( foodItems[i].filters.find(filter => filter.toLowerCase() === value.toLowerCase())) {
        results.push( foodItems[i] );
      }
    }

    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].restaurantName.toLowerCase() === value.toLowerCase() ) {
        results.push( restaurants[i] );
      }
    }
    console.log(results);
    this.searchResults.next(results);
  }
}
