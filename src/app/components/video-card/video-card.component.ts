import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/shared/models/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input()
  video: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
