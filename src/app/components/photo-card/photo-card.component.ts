import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/app/shared/models/asset.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  @Input()
  photo: Asset;

  constructor() { }

  ngOnInit(): void {
  }

}
