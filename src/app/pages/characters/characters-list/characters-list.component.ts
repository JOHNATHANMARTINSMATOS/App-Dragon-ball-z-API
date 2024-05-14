import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service'; // ajuste o caminho conforme necessário
import { PaginationCharacter } from '../characters'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'] // Corrigido: styleUrl -> styleUrls
})
export class CharactersListComponent implements OnInit {
  characters: PaginationCharacter | undefined; // Usando a interface PaginationCharacter

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.charactersService.getCharacters().subscribe(
      (data: PaginationCharacter) => {
        this.characters = data;
      },
      (error) => {
        console.error('Erro ao buscar personagens', error);
      }
    );
  }
}
