import { Component, OnInit } from '@angular/core';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { AddFoodItemService } from '../services/add-food-item.service';
import { combineLatest } from 'rxjs';
import { FilterPipe } from '../services/filter.pipe';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component ({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [AddFoodItemService]
})

export class SearchbarComponent implements OnInit {
  searchField: FormControl;
  foodItems;
  restaurants;
  searchValue;

  title = 'searchResults';
  
  closeResult: string;

  constructor(
    private addFoodItemService: AddFoodItemService,
    private restaurantInfoService: RestaurantInfoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.searchField = new FormControl();
  
    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.addFoodItemService.getFoodItems()
    )
    .subscribe(([restaurants, foodItems]) => {
      this.restaurants = restaurants;
      this.foodItems = foodItems;
    });
  }
  
  onSubmit(value: string) {
    this.searchValue = value;
  }

  open(content) { 
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }
}
