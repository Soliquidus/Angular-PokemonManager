import {Component, OnInit} from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any;
  count = 0;
  public selectedPokemon: any;

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonsService.getPokemons();
    this.count = this.pokemonsService.countPokemons();
  }

  selectPokemon = (name: any) => this.selectedPokemon = name;
}
