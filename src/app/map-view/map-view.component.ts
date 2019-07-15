import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { Restaurant } from '../services/restaurant.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})

export class MapViewComponent implements OnInit {
  restaurantsInfo: Restaurant[] = [];

  zoom = 12;
  lat = 38.620771;
  lng = -90.224258;

  markers: Marker[] = [
    {
      id: '5d054e897c056ffd40d62313',
      lat: 38.620771,
      lng: -90.224258,
      label: 'Lona’s LiL Eats',
      draggable: false
    },
    {
      id: '5d054e897c056ffd40d62314',
      lat: 38.598995,
      lng: -90.242711,
      label: 'Meskerem',
      draggable: false
    },
    {
      id: '5d054e897c056ffd40d62315',
      lat: 38.599454,
      lng: -90.242853,
      label: 'Pho Grand',
      draggable: false
    },
    {
      id: '5d054e897c056ffd40d62316',
      lat: 38.593029,
      lng: -90.222187,
      label: 'The Mudhouse',
      draggable: false
    },
    {
      id: '5d054e897c056ffd40d62317',
      lat: 38.627324,
      lng: -90.253191,
      label: 'Rise Coffee House',
      draggable: false
    },
    {
      id: '5d054e897c056ffd40d62318',
      lat: 38.594040,
      lng: -90.230209,
      label: 'La Vallesana',
      draggable: false
    },
    {
      id: '5d054e897c056ffd40d62319',
      lat: 38.610859,
      lng: -90.203102,
      label: 'Mission Taco Joint - Soulard',
      draggable: false
    }
  ];

  constructor(
    private restaurantInfoService: RestaurantInfoService,
    private addFoodItemService: AddFoodItemService) {
    }

  ngOnInit() {
    this.restaurantInfoService.getRestaurants()
    .subscribe(restaurantsInfo => { this.restaurantsInfo = restaurantsInfo;
    });
  }

  onClick(infoWindow, $event: MouseEvent) {
      infoWindow.open();
  }
}

interface Marker {
  id: any;
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


