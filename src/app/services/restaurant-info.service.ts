import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestaurantInfoService {
  private restaurantsArray: Restaurant[] = [
  {
    id: '101',
    restaurantName: 'Lona’s LiL Eats',
    address: ['2199 California Ave', 'St. Louis, MO 63104'],
    phoneNumber: '314.925.8938',
    hours: ['Tues – Sat:  11 am – 9 pm'],
    website: 'http://lonaslileats.com/'
  },
  {
    id: '102',
    restaurantName: 'Meskerem',
    address: ['3210 S. Grand Blvd', 'St. Louis, MO 63118'],
    phoneNumber: '314.772.4442',
    hours: ['Mon – Thurs:  11 am – 9:30 pm', 'Fri – Sat:  11 am – 10 pm', 'Sun:  12 pm – 9:30 pm'],
    website: 'http://meskeremstl.com/'
  },
  {
    id: '103',
    restaurantName: 'Pho Grand',
    address: ['3195 S Grand Blvd', 'St. Louis, MO 63118'],
    phoneNumber: '314.664.7435',
    hours: ['Sun – Mon:  11 am – 9:30 pm', 'Wed – Thurs:  11 am – 9:30 pm', 'Fri – Sat:  11 am – 11:30 pm'],
    website: 'https://www.phogrand.com/'
  },
  {
    id: '104',
    restaurantName: 'The Mudhouse',
    address: ['2101 Cherokee St', 'St. Louis, MO 63118'],
    phoneNumber: '314.776.6599',
    hours: ['Mon – Sun:  7 am – 4 pm'],
    website: 'http://www.themudhousestl.com/'
  },
  {
    id: '105',
    restaurantName: 'Rise Coffee House',
    address: ['4176 Manchester Ave', 'St. Louis, MO 63110'],
    phoneNumber: '314.405.8171',
    hours: ['Mon – Fri:  6:30 am – 6 pm', 'Sat:  6:30 am – 7 pm', 'Sun:  8 am – 7 pm'],
    website: 'https://risecoffeestl.com/'
  },
  {
    id: '106',
    restaurantName: 'La Vallesana',
    address: ['2801 Cherokee St', 'St. Louis, MO 63118'],
    phoneNumber: '314.776.4223',
    hours: ['Mon – Sun:  10am - 10pm'],
    website: 'https://www.neverialavallesana.com/'
  },
  {
    id: '107',
    restaurantName: 'Mission Taco Joint - Soulard',
    address: ['908 Lafayette Ave', 'St. Louis, MO 63104'],
    phoneNumber: '314.858.8226',
    hours: ['Mon – Sat:  11 am – 12:30 am', 'Sun:  11 am –11:00 pm'],
    website: 'https://www.missiontacojoint.com/'
  },

  ];

  getRestaurants() {
    return of(this.restaurantsArray);
  }

  getRestaurant(id: string) {
    return of(this.restaurantsArray.find(restaurant => restaurant.id === id));
  }

}
