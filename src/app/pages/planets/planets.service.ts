import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationPlanets } from './planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PaginationPlanets>{
    let url = 'https://dragonball-api.com/api/planets?limit=10';
    return this.http.get<PaginationPlanets>(url);
  }
}
