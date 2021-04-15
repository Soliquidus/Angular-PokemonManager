import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  @Output() eventClickImage = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
  clickOnImage(name): void {
    this.eventClickImage.emit(name);
  }
}
