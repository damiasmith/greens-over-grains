import { Component, OnInit } from '@angular/core';
import { AddFoodItemService } from '../services/add-food-item.service';



@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})


export class ListViewComponent implements OnInit {

  foodItems = [];

  constructor(private service: AddFoodItemService) { }

  ngOnInit() {
    this.service.getFoodItems()
    .subscribe(foodItems => { this.foodItems = foodItems as any,
      console.log(foodItems);
    });
  }
  starRating(star) {
    console.log(star);
    return Array.from(Array(star).keys());
  }
}
