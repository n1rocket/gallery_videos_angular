import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../shared/models/video.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  name: string = "";


  @Input()
  video: Video = new Video('','','',false, false);


  ngOnInit(): void {
    console.log("VideoCardComponent - video: " + this.video.id);
  }

  onSubmit(form: NgForm) {

    console.log(form.value);

    this.video.success = (form.value.name == this.video.answer)
    this.video.error = (form.value.name != this.video.answer)

  }

}
