import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AddFoodItemService } from '../services/add-food-item.service';




@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {
  form: FormGroup;
  filters = [
    {name: 'gluten-free', selected: false, id: 1},
    {name: 'vegetarian', selected: false, id: 2},
    {name: 'vegan', selected: false, id: 3},
    {name: 'pescatarian', selected: false, id: 4},
    {name: 'lactose-free', selected: false, id: 5}
  ];


  constructor(
    private service: AddFoodItemService,
    private fb: FormBuilder
    ) {
  }

  ngOnInit() {
    this.form = this.fb.group ({
      itemName: ['', Validators.required],
      restaurantName: ['', Validators.required],
      filters: this.addCheckboxes(),
      rating: ['', Validators.required],
  });
}

 addCheckboxes() {
    const arr = this.filters.map(filter => {
      console.log(this.filters);
      return this.fb.control(filter.selected);
    });
    return this.fb.array(arr);
  }

  addFilters(selected: boolean[]) {
    return this.filters.filter((filter, index) => selected[index]
    ).map(filter => filter.name);
  }


  onAdd() {
    console.log(this.form.valid);
    const foodItem = this.form.value;
    this.service.addFoodItems({...foodItem, filters: this.addFilters(foodItem.filters)});
  }

}
