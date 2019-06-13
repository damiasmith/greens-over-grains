import { Component, OnInit } from '@angular/core';
import { AddFoodItemService } from '../services/add-food-item.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {

  foodItems = [];
  displayFoodItems = [];

  filters = [
    'gluten-free',
    'vegetarian',
    'vegan',
    'pescatarian',
    'lactose-free'
  ];

  activeFilters = [];

  constructor(
    private service: AddFoodItemService,
    ) { }

  ngOnInit() {
    this.service.getFoodItems()
    .subscribe(foodItems => { this.foodItems = foodItems,
      this.displayFoodItems = this.foodItems;
    });
  }

  starRating(star) {
    return Array.from(Array(star).keys());
  }

  onFilter(toggleFilter: string) {
    const index = this.activeFilters.findIndex(f => f === toggleFilter);
    if (index !== -1) {
      this.activeFilters.splice(index, 1);
     } else {
      this.activeFilters.push(toggleFilter);
     }
    this.displayFoodItems = this.foodItems
    .filter(foodItem => this.activeFilters
      .every(f => foodItem.filters.includes(f)));
  }
}
