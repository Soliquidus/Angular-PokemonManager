import {Component, OnInit} from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
import {faOptinMonster} from '@fortawesome/free-brands-svg-icons';
import {FormSearchPokemon} from '../../models/form-search-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any;
  page = 1;
  limit = 25;
  count = 0;
  public selectedPokemon: any;
  faOptinMonster = faOptinMonster;
  formSearchPokemon = new FormSearchPokemon('');
  easterEggs = false;

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  // Get Pokemons with pagination parameters
  getPokemons = () => {
    this.pokemonsService.getPokemons(this.limit, this.page)
      .subscribe(res => {
        this.pokemons = res.results;
        this.count = res.count;
      });
  }

  // Select one Pokemon
  selectPokemon = (name: any) => this.selectedPokemon = name;

  // Search for Pokemons
  search = (pokemonName: any) => {
    this.easterEggs = false;
    const regex = new RegExp(pokemonName, 'gi');
    this.pokemonsService.getPokemons(this.limit, this.page).subscribe(
      res => {
        this.pokemons = res.results.filter(pokemon => pokemon.name.match(regex)
        );
        if (pokemonName === 'C3PO') {
          this.easterEggs = true;
        }
      });
  }

  // Reset search
  cancelSearch = () => {
    this.pokemonsService.getPokemons(this.limit, this.page).subscribe(res => this.pokemons = res.results);
    this.formSearchPokemon.setName('');
  }
}
