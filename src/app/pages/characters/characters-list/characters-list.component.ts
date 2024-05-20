import { Component } from '@angular/core';

import { PaginationCharacter } from '../characters';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

  paginationCharacter: PaginationCharacter | undefined;

  private characters:[] = [];


  //injeção de dependência
  constructor(private service: CharactersService){

  //regra para fazer a consulta
    this.service.getCharacters()
    .subscribe((dados: PaginationCharacter) => {
    //variável dados, contém as informações oriundas do service;
    //a variável dados está sendo tipa para  PaginationCharacter
    //é preciso criar uma variável no componente para receber os dados da camada de serviço.
      console.log(dados);

      //As informações recebida do serviço, são 'setadas' na propriedade que irá 'imprimir' os dados no componente.
      this.paginationCharacter = dados;
    }
  );

  }

}

