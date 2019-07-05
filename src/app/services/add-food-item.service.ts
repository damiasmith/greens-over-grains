import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.interface';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AddFoodItemService {

  uri = 'http://localhost:4000/food-items';

  private meals: FoodItem[] = [];

  private filters = [
    {name: 'gluten-free', selected: false, id: 1},
    {name: 'vegetarian', selected: false, id: 2},
    {name: 'vegan', selected: false, id: 3},
    {name: 'pescatarian', selected: false, id: 4},
    {name: 'lactose-free', selected: false, id: 5}
  ];

  constructor(private http: HttpClient) { }

   getFoodItems(restaurantId?) {
    let params = new HttpParams();
    if (restaurantId) {
      params = params.set('restaurantId', restaurantId);
    }
    return this.http.get(this.uri, {params});
   }

   addFoodItems(itemName, restaurantId, filters, rating) {
    const meals = {
      itemName,
      restaurantId,
      filters,
      rating,
    };

    console.log(restaurantId);

    this.http.post(this.uri, meals)
        .subscribe(res => console.log('Done'));
  }
}
