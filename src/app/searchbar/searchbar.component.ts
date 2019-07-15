import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '..//services/search-results.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';



@Component ({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  form: FormGroup;

  constructor(
    private searchResultsService: SearchResultsService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.form = this.fb.group ({
    search: ['', Validators.required],
  });
  }

  onSubmit(value: string) {
    if (this.form.valid) {
      this.searchResultsService.search(value);
      this.router.navigate(['/search']);
    }
  }
}
