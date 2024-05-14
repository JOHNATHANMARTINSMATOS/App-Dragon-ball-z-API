import { PaginationCharacter } from './characters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersService {


  private apiUrl = "https://dragonball-api.com/api/characters?limit=5";

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<PaginationCharacter> {
    return this.http.get<PaginationCharacter>(this.apiUrl);
  }
}
