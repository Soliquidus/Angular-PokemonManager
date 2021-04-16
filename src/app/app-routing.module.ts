import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerationsComponent} from './components/generations/generations.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';
import {CreationComponent} from './components/account/creation/creation.component';
import {ConnectionComponent} from './components/account/connection/connection.component';

const routes: Routes = [
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'createAccount', component: CreationComponent},
  {path: 'connect', component: ConnectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
