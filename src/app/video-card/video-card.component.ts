import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../shared/models/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input()
  video: Video = new Video('','');

  constructor() { }

  ngOnInit(): void {
    console.log("VideoCardComponent - video: " + this.video.id);
  }

}
