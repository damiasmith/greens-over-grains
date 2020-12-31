import { Component, OnInit } from '@angular/core';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { combineLatest } from 'rxjs';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component ({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})

export class SearchbarComponent implements OnInit {
  searchField;
  foodItems;
  restaurants;
  searchValue;
  items = [];

  constructor(
    private addFoodItemService: AddFoodItemService,
    private restaurantInfoService: RestaurantInfoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.searchField = new FormControl('', Validators.required);
    this.items.length = 0;
  
    combineLatest ([
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    ])
    .subscribe(([restaurants, foodItems]) => {
      this.restaurants = restaurants;
      this.foodItems = foodItems.map(foodItem => ({...foodItem, restaurantName: this.getName(foodItem.restaurantId)}));
    });
  }
  
  onSubmit(value: string) {
    this.searchValue = value;
  }

  checkResult(item) {
    if (item.itemName || item.address) {
      if (!this.items.includes(item)) {
        this.items.push(item);
        console.log("items: ", this.items);
      }
      return true;
    } else {
      console.log("items: ", this.items);
      return false;
    }
  };

  getName(id) {
    id = id;
    if (id) {
      const displayRestaurant = this.restaurants.find(restaurant => restaurant._id == id).restaurantName;
      if (displayRestaurant) return displayRestaurant;
      else return '';
    }
  }

  open(content) { 
    if (this.searchField.invalid) {
      return;
    } else if (this.searchField.valid) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}) 
    }
  }

  close() {
    this.searchField.reset();
  }
}
