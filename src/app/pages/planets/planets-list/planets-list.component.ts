import { PlanetsService } from '../planets.service';
import { PaginationPlanets } from './../planets';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.css'
})
export class PlanetsListComponent {

  PaginationPlanets: PaginationPlanets | undefined;

  private Planets: [] = [];

  constructor (private service: PlanetsService){
    this.service.getPlanets()
    .subscribe((dados: PaginationPlanets)=>{
      console.log(dados);
      this.PaginationPlanets = dados;
    })
  }
}
