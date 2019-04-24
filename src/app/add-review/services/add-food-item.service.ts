import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.interface';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AddFoodItemService {
  private meals: FoodItem[] = [{
    itemName: 'Spicy Tofu Wrap',
    restaurantName: 'Lona\'s Little Eats'
  }];

  public filters = [ 'gluten-free', 'vegetarian', 'vegan', 'pescatarian', 'lactose-free'];

   getFoodItems() {
     return of(this.meals);
   }

   addFoodItems(item: FoodItem) {
    this.meals.push(item);
   }
}
