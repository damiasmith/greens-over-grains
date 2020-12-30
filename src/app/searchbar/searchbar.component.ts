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

  constructor(
    private addFoodItemService: AddFoodItemService,
    private restaurantInfoService: RestaurantInfoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
      this.searchField = new FormControl('', Validators.required);
  
    combineLatest ([
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    ])
    .subscribe(([restaurants, foodItems]) => {
      this.restaurants = restaurants;
      this.foodItems = foodItems;
    });
  }
  
  onSubmit(value: string) {
    this.searchValue = value;
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
