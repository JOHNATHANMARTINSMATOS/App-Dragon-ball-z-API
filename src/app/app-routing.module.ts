import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "characters",
    loadChildren: () => import('./pages/characters/characters.module')
    .then(m=>m.CharactersModule)
  },
  {
    path:"planets",
    loadChildren:() => import('./pages/planets/planets.module').then(
      m =>m.PlanetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
