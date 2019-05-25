import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '..//services/search-results.service';
import { Router } from '@angular/router';


@Component ({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  constructor(
    private searchResultsService: SearchResultsService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit(value: string) {
    this.searchResultsService.search(value);
    this.router.navigate(['/search']);
  }
}
