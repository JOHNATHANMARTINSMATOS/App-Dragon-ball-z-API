import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Characters, PaginationCharacter } from '../characters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: Characters[]=[];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.charactersService.getCharacters().subscribe(
      (data:PaginationCharacter) => {
        this.characters = data.items;
      },
      (error) => {
        console.error('Erro ao buscar personagens', error);
      }
    );
  }
}


