import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { BrowseFoodComponent } from './browse-food/browse-food.component';
import { LogInComponent } from './log-in/log-in.component';

import { ListViewComponent } from './browse-food/list-view/list-view.component';
import { FoodItemDetailsComponent } from './browse-food/food-item-details/food-item-details.component';
import { RestaurantDetailsComponent } from './browse-food/restaurant-details/restaurant-details.component';
import { MapViewComponent } from './browse-food/map-view/map-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
