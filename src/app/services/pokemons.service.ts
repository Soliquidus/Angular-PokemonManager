import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public pokemons = [
    { id: 1, name: 'Bulbizarre', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      category: 'seed', type: ['plant', 'poison'], size: 0.78, weight: 6.9 },
    { id: 2, name: 'Herbizarre', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      category: 'seed', type: ['plant', 'poison'], size: 1, weight: 13 },
    { id: 3, name: 'Florizarre', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      category: 'seed', type: ['plant', 'poison'], size: 2, weight: 100 },
    { id: 4, name: 'Salamèche', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      category: 'lizard', type: ['fire'], size: 0.6, weight: 8.5 },
    { id: 5, name: 'Reptincel', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      category: 'flame', type: ['fire'], size: 1.1, weight: 19 },
    { id: 6, name: 'Dracaufeu', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      category: 'flame', type: ['fire', 'flight'], size: 1.7, weight: 90.5 },
  ];

  constructor() { }

  getPokemons = () => this.pokemons;

  countPokemons = () => this.pokemons.length;

  searchPokemon = (pokemonName: string) => {
    const regex = new RegExp(pokemonName, 'gi');
    return this.pokemons.filter(pokemon => pokemon.name.match(regex));
  }
}
