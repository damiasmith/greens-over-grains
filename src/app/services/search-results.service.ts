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
    let foodItems = [];

    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    )
    .subscribe(([restaurantsInfo, addFoodItems]) => {
      restaurants = restaurantsInfo;
      foodItems = addFoodItems;

      for (let foodItem of foodItems) {
        if (foodItem.itemName.toLowerCase() === value.toLowerCase()) {
            results.push( foodItem );
        } else if ( foodItem.filters.find(filter => filter.toLowerCase() === value.toLowerCase())) {
            results.push( foodItem );
          /*} else if (foodItem.restaurantId === restaurant._id) {
            results.push( foodItem );*/
        }
      }
      for (let restaurant of restaurants) {
        if (restaurant.restaurantName.toLowerCase() === value.toLowerCase() ) {
          results.push( restaurant );
        }
      }

      this.searchResults.next(results);
      console.log(this.searchResults);
    });

  }
}
