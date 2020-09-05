import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../shared/models/challenge.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  name: string = "";


  @Input()
  video: Challenge = new Challenge('','','','',false, false);


  ngOnInit(): void {
    console.log("VideoCardComponent - video: " + this.video.youtubeId);
  }

  onSubmit(form: NgForm) {

    console.log(form.value);

    this.video.success = (form.value.name == this.video.answer)
    this.video.error = (form.value.name != this.video.answer)

  }

}
