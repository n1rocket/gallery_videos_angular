import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/shared/models/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input()
  video: Video;

  constructor() {}

  ngOnInit(): void {
    console.log("VideoComponent - id: " + this.video.id);

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
