import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenerationAPI} from '../models/generation-api';
import {PokemonsAPI} from '../models/pokemons-api';
import {PokemonAPI} from '../models/pokemon-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  public pokemons: any;

  constructor(private http: HttpClient) { }

  getGenerations = () => {
    const url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GenerationAPI>(url);
  }

  getPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<PokemonsAPI>(url);
  }

  getPokemon = (url) => this.http.get<PokemonAPI>(url);
}
