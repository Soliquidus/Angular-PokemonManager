import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  generations: any;
  numberOfGenerations: number;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getGenerations().subscribe(res => {
      this.generations = res.results;
      this.numberOfGenerations = res.count;
    });
  }

}
