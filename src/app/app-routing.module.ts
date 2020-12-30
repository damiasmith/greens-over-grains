import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ListViewComponent } from './list-view/list-view.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MapViewComponent } from './map-view/map-view.component';

const routes: Routes = [
  {
    path: 'restaurant-details/:id',
    component:
    RestaurantDetailsComponent
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
   {
    path: '',
    component:
    HomeComponent,
    // redirectTo: '/',
    // pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
