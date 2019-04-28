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
    filters: ['gluten-free', 'vegetarian'],
    rating: 4,
  }];

  private filters = [
    {name: 'gluten-free', selected: false, id: 1},
    {name: 'vegetarian', selected: false, id: 2},
    {name: 'vegan', selected: false, id: 3},
    {name: 'pescatarian', selected: false, id: 4},
    {name: 'lactose-free', selected: false, id: 5}
  ];

   getFoodItems() {
     return of(this.meals);
   }

   addFoodItems(item: FoodItem) {
    this.meals.push(item);
    console.log(item);
   }
}
