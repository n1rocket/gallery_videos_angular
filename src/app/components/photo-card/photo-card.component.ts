import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  @Input()
  photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
