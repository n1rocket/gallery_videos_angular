import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/app/shared/models/asset.model';

@Component({
  selector: 'app-audio-card',
  templateUrl: './audio-card.component.html',
  styleUrls: ['./audio-card.component.css']
})
export class AudioCardComponent implements OnInit {

  @Input()
  audio: Asset;

  constructor() { }

  ngOnInit(): void {
  }

}
