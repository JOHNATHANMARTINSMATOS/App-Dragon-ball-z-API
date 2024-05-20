import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersService } from './characters.service';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ]

})
export class CharactersModule { }

