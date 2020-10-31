import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card = new Card('','','', '');

  constructor() { }

  ngOnInit(): void {
  }

}
