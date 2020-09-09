import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge.model';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/shared/models/card.model';
import { Asset } from 'src/app/shared/models/asset.model';
import { Video } from 'src/app/shared/models/video.model';

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

  items: Card[] =
  [
    new Card(Card.TYPE_AUDIO, Card.TAG_MUSICA, new Asset("assets/songs/black-eyed-peas-shakira-girl-like-me-audio.mp3", "Para empezar vamos a poner un poquito de música, porque sabemos que ésta le da otro gusto a la vida.", "Spotify")),
    new Card(Card.TYPE_VIDEO, Card.TAG_HUMOR, new Video('EuEM_yyc8fg', 'Lo mejor de la cuarentena no podía ser otra cosa que esta...', 'COVID-19')),
    new Card(Card.TYPE_CHALLENGE_VIDEO, Card.TAG_RETO, new Challenge('gTOkc0qROdY', "Anécdota: Recuerdas aquel día que pasamos juntas tomando unas cervezas en aquel lugar donde terminamos besando a un calvo, qué buenos ratos!. (Laura)", "Laura",false,this.success)),
    new Card(Card.TYPE_PHOTO, Card.TAG_RECUERDO, new Asset("assets/images/photo1eva.jpg", "Aquella playa en Canarias era la desconexión que necesitabas.", "Julio Pérez de Castro")),
    new Card(Card.TYPE_VIDEO, Card.TAG_RECUERDO, new Video("x3wmqMMJD6E", "La vida en un vídeo, disfruta de tu cumpleaños!", "Laura Casarrubios")),
    new Card(Card.TYPE_CHALLENGE_VIDEO, Card.TAG_RETO, new Challenge('K6ECvWkh2K8', "Recuerdo: Desde niños siempre hemos estado juntos, no había foto mía sin que aparecieses haciendo la gansa. Te quiero! (Hector)", "Hector",false,this.success)),
    new Card(Card.TYPE_AUDIO, Card.TAG_RECUERDO, new Asset("assets/audios/w001.ogg", "Espero que te guste mi mensaje de voz", "Paquita Salas")),
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
        if(element.data instanceof Challenge){
          element.data.success = true;
        }
      });
    }
  }
}
