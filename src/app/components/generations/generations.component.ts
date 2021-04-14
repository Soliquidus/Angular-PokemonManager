import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  generations = [
    'Generation I',
    'Generation II',
    'Generation III',
    'Generation IV',
    'Generation V',
    'Generation VI',
    'Generation VII',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
