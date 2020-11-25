import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AddFoodItemService {
  searchValue;

  private meals: FoodItem[] = [
    {
      id: '101',
      itemName: 'Spicy Tofu Wrap with Spicy Eggplant',
      restaurantName: 'Lona\'s LiL Eats',
      filters: ['gluten-free', 'vegetarian'],
      rating: '4',
      image: 'spicy_tofu_wrap.jpg'
    },
    {
      id: '102',
      itemName: 'Vegetarian Combo with Gluten-Free Injera',
      restaurantName: 'Meskerem',
      filters: ['gluten-free', 'vegetarian', 'vegan', 'lactose-free'],
      rating: '5'
    },
    {
      id: '103',
      itemName: 'Tofu Xa Ot (chiles and lemongrass)',
      restaurantName: 'Pho Grand',
      filters: ['gluten-free', 'vegetarian', 'vegan', 'lactose-free'],
      rating: '5'
    },
    {
      id: '104',
      itemName: 'Mudslinger with Gluten-Free Bread',
      restaurantName: 'The Mudhouse',
      filters: ['gluten-free', 'vegetarian', 'vegan', 'lactose-free'],
      rating: '5'
    },
    {
      id: '104',
      itemName: 'Okra Masala with Gluten-Free Bread',
      restaurantName: 'The Mudhouse',
      filters: ['gluten-free', 'vegetarian', 'lactose-free'],
      rating: '3'
    },
    {
      id: '104',
      itemName: 'The Goat with Gluten-Free Bread',
      restaurantName: 'The Mudhouse',
      filters: ['gluten-free', 'vegetarian'],
      rating: '4'
    },
    {
      id: '105',
      itemName: 'Hash',
      restaurantName: 'Rise Coffee House',
      filters: ['gluten-free', 'vegetarian'],
      rating: '4'
    },
    {
      id: '105',
      itemName: 'Tumeric and Ginger Rice Bowl',
      restaurantName: 'Rise Coffee House',
      filters: ['gluten-free' , 'vegetarian'],
      rating: '5'
    },
    {
      id: '106',
      itemName: 'Spicy Shrimp Tacos with Corn Tortillas',
      restaurantName: 'La Vallesana',
      filters: ['gluten-free', 'pescatarian'],
      rating: '5'
    },
    {
      id: '107',
      itemName: 'Grilled Baja Fish Taco',
      restaurantName: 'Mission Taco Joint',
      filters: ['gluten-free', 'pescatarian'],
      rating: '3'
    }
  ];

  private newMeals: FoodItem[] = [];

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

   getFoodItem(id: string) {
    return of(this.meals.filter(foodItem => foodItem.id === id));
  }

   getAddedFoodItem() {
     return of(this.newMeals);
   }

   addFoodItems(item: FoodItem) {
    this.meals.push(item);
    this.newMeals.push(item);
   }
   
   search(value:string) {
    this.searchValue = value;
    console.log(this.searchValue);
    return of(this.searchValue);
   }
   
};
