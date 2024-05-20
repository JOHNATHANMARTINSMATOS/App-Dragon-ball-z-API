import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' }, // Redireciona para /characters por padrão
  { path: 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule) } // Carrega o módulo CharactersModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
