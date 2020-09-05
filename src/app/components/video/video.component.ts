import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input()
  video: Challenge;

  constructor() {}

  ngOnInit(): void {
    console.log("VideoComponent - id: " + this.video.youtubeId);

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
