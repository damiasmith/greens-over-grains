import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.interface';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestaurantInfoService {
  uri = 'http://localhost:4000/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(this.uri);
  }

  getRestaurant(id) {
    return this.http.get(`${this.uri}/${id}`);
    }

   addRestaurants(restaurantName, address, hours, website) {
    const restaurants = {
      restaurantName,
      address,
      hours,
      website
    };

    this.http.post(this.uri, restaurants)
        .subscribe(res => console.log('Done'));
  }

}
