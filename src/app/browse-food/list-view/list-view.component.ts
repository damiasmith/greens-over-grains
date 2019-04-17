import { Component, OnInit } from '@angular/core';
import { Url } from 'url';

interface FoodItem {
  id: number;
  itemName: string;
  restaurantName: string;
  filter: Array<string>;
  rating: number;
  image: File;

}

interface Restaurant {
  id: number;
  restaurantName: string;
  address: string;
  phoneNumber: string;
  website: Url;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
