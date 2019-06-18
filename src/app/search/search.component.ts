import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '..//services/search-results.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results;
  searchResults;
  empty: Observable <boolean>;

  constructor(
    private searchResultsService: SearchResultsService
  ) { }

  ngOnInit() {
    this.searchResults = this.searchResultsService.onResults().subscribe(results => this.results = results);
    /* this.empty = this.searchResults.map(results => this.results.length < 1);
    console.log(this.empty);*/
    console.log(this.results);
  }

}
