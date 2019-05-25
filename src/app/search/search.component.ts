import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '..//services/search-results.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results;

  constructor(
    private searchResultsService: SearchResultsService
  ) { }

  ngOnInit() {
    this.searchResultsService.onResults().subscribe(results => this.results = results);
  }

}
