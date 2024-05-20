import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationCharacter } from './characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://dragonball-api.com/api/characters?limit=5';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<PaginationCharacter> {
    return this.http.get<PaginationCharacter>(this.apiUrl);
  }
}

