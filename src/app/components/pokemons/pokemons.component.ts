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
  count = 0;
  public selectedPokemon: any;
  faOptinMonster = faOptinMonster;
  formSearchPokemon = new FormSearchPokemon('');
  easterEggs = false;

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe(res => {
      this.pokemons = res.results;
      this.count = res.count;
    });
  }

  selectPokemon = (name: any) => this.selectedPokemon = name;

  search = (pokemonName: any) => {
    this.easterEggs = false;
    const regex = new RegExp(pokemonName, 'gi');
    this.pokemonsService.getPokemons().subscribe(
      res => {
        this.pokemons = res.results.filter(pokemon => pokemon.name.match(regex)
        );
        if (pokemonName === 'C3PO') {
          this.easterEggs = true;
        }
      });
  }

  cancelSearch = () => {
    this.pokemonsService.getPokemons().subscribe(res => this.pokemons = res.results);
    this.formSearchPokemon.setName('');
  }
}
