import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './home/add-review/add-review.component';
import { BrowseFoodComponent } from './home/browse-food/browse-food.component';
import { LogInComponent } from './log-in/log-in.component';

import { ListViewComponent } from './home/browse-food/list-view/list-view.component';
import { FoodItemDetailsComponent } from './home/browse-food/food-item-details/food-item-details.component';
import { RestaurantDetailsComponent } from './home/browse-food/restaurant-details/restaurant-details.component';
import { MapViewComponent } from './home/browse-food/map-view/map-view.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddReviewComponent,
    BrowseFoodComponent,
    LogInComponent,
    ListViewComponent,
    FoodItemDetailsComponent,
    RestaurantDetailsComponent,
    MapViewComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
