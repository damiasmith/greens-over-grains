import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ListViewComponent } from './list-view/list-view.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AddFoodItemService } from './services/add-food-item.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddReviewComponent,
    ListViewComponent,
    RestaurantDetailsComponent,
    MapViewComponent,
    SearchbarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
  ],
  providers: [AddFoodItemService],
  bootstrap: [AppComponent],
})
export class AppModule { }
