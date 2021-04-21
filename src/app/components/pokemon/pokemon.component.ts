import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {PokemonAPI} from '../../models/pokemon-api';
import {PokemonsService} from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemonInput: any;
  @Output() eventClickImage = new EventEmitter();

  isModalActive: boolean;
  pokemon: PokemonAPI;

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.pokemonsService.getPokemon(this.pokemonInput.url)
      .subscribe(res => {
        this.pokemon = res;
      });
  }

  // Fonction pour la modal de Bulma.
  toggleModal = () => this.isModalActive = !this.isModalActive;
}
