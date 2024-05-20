import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersService } from './characters.service';

@NgModule({
  declarations: [
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ],

  providers: [CharactersService] // Adicionamos o CharactersService aos providers
})
export class CharactersModule { }

