import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Challenge } from 'src/app/shared/models/challenge.model';


@Component({
  selector: 'app-video-challenge',
  templateUrl: './video-challenge.component.html',
  styleUrls: ['./video-challenge.component.css']
})
export class VideoChallengeComponent implements OnInit {

  name: string = "";


  @Input()
  video: Challenge = new Challenge('','','',false, false, '');


  ngOnInit(): void {
    console.log("VideoChallengeComponent - video: " + this.video.youtubeId);
  }

  onSubmit(form: NgForm) {

    console.log(form.value);

    this.video.success = (form.value.name == this.video.answer)
    this.video.error = (form.value.name != this.video.answer)

  }

}
