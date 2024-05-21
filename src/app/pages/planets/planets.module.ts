import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlanetsListComponent,
    PlanetsDetailComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    HttpClientModule
  ]
})
export class PlanetsModule { }
