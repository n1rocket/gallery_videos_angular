import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge.model';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/shared/models/card.model';
import { Photo } from 'src/app/shared/models/photo.model';
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
    new Card(Card.TYPE_VIDEO, Card.TAG_HUMOR, new Video('EuEM_yyc8fg', 'COVID-19')),
    new Card(Card.TYPE_CHALLENGE_VIDEO, Card.TAG_RETO, new Challenge('gTOkc0qROdY', "Anécdota: Recuerdas aquel día que pasamos juntas tomando unas cervezas en aquel lugar donde terminamos besando a un calvo, qué buenos ratos!. (Laura)", "Laura",false,this.success)),
    new Card(Card.TYPE_PHOTO, Card.TAG_RECUERDO, new Photo("assets/images/photo1eva.jpg", "Julio Pérez de Castro")),
    new Card(Card.TYPE_VIDEO, Card.TAG_RECUERDO, new Video("x3wmqMMJD6E", "Laura Casarrubios")),
    new Card(Card.TYPE_CHALLENGE_VIDEO, Card.TAG_RETO, new Challenge('K6ECvWkh2K8', "Recuerdo: Desde niños siempre hemos estado juntos, no había foto mía sin que aparecieses haciendo la gansa. Te quiero! (Hector)", "Hector",false,this.success)),
    new Card(Card.TYPE_CHALLENGE_VIDEO, Card.TAG_RETO, new Challenge('7Ys5KapHuRk', "Vacaciones: Un día cojiste un avión,al llegar todo era agua, te recojí en el coche y disfrutamos de un maravilloso lugar y comida, con más TIEMPO del que tenías en Madrid. (Miguel)", "Miguel",false,this.success)),

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
