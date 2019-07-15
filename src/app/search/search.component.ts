import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '..//services/search-results.service';
import { RestaurantInfoService } from '../services/restaurant-info.service';
import { Observable, combineLatest  } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  results;
  restaurants;
  searchResults;
  empty: Observable <boolean>;

  constructor(
    private searchResultsService: SearchResultsService,
    private restaurantInfoService: RestaurantInfoService
  ) { }

  ngOnInit() {

    combineLatest (
      this.restaurantInfoService.getRestaurants(),
      this.searchResults = this.searchResultsService.onResults()
    )
    .subscribe(([restaurantsInfo, results]) => {
      this.restaurants = restaurantsInfo.reduce((accumulator, current) => {
        accumulator[current._id] = current;
        return accumulator;
      }, {});
      this.results = results;
    });
  }
}
