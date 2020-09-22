import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { Data } from 'src/app/shared/utils/data';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  items: Card[] = Data.examples;

  constructor() { }

  ngOnInit(): void {
  }

}
