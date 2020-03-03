import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { LogInComponent } from './log-in/log-in.component';

import { ListViewComponent } from './list-view/list-view.component';
import { FoodItemDetailsComponent } from './food-item-details/food-item-details.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddFoodItemService } from './services/add-food-item.service';
import { SearchComponent } from './search/search.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddReviewComponent,
    LogInComponent,
    ListViewComponent,
    FoodItemDetailsComponent,
    RestaurantDetailsComponent,
    MapViewComponent,
    SignUpComponent,
    SearchComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forRoot([
      {
        path: 'search',
        component:
        SearchComponent
      },
      {
        path: 'restaurant-details/:id',
        component:
        RestaurantDetailsComponent
      },
      {
        path: '',
        component:
        HomeComponent
      },
      {
        path: 'add-review',
        component:
        AddReviewComponent
      },
      {
        path: 'list-view',
        component:
        ListViewComponent
       },
      {
        path: 'map-view',
        component: MapViewComponent
       },
    ])
  ],
  providers: [AddFoodItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
