import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.interface';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class AddFoodItemService {
  private meals: FoodItem[] = [{
    itemName: 'Spicy Tofu Wrap',
    restaurantName: 'Lona\'s Little Eats',
    filters: ['gluten-free ', 'vegetarian '],
    rating: 4
  }];


   getFoodItems() {
     return of(this.meals);
   }

   addFoodItems(item: FoodItem) {
    this.meals.push(item);
   }

}
