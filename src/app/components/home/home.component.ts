import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  error:boolean = false;
  success:boolean = false;
  lock:boolean = true;
  generalCode:string = "P3l1gr0"

  items: Video[] = [new Video('27vpe-H9YRU', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Respuesta Laura", "Laura",false,this.success),
  new Video('K6ECvWkh2K8', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Respuesta Aída", "Aída",false,this.success),
  new Video('7Ys5KapHuRk', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Respuesta Marina", "Marina",false,this.success),
  new Video('K9XPNSFyqXE', "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures. Respuesta Hector", "Hector",false,this.success),
  new Video('7Ys5KapHuRk', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Respuesta Marina", "Marina",false,this.success),
  new Video('K9XPNSFyqXE', "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures. Respuesta Hector", "Hector",false,this.success),
];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {

    console.log(form.value);

    this.lock = (form.value.code != this.generalCode)

    this.error = this.lock
    this.success = !this.lock

    if(this.success){
      this.items.forEach(element => {
        element.success = true;
      });
    }

  }
}
