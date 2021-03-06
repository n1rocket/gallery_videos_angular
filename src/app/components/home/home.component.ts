import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge.model';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/shared/models/card.model';
import { Asset } from 'src/app/shared/models/asset.model';
import { Video } from 'src/app/shared/models/video.model';
import { Data } from 'src/app/shared/utils/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showRoulette: boolean = false;
  error: boolean = false;
  success: boolean = false;
  lock: boolean = true;
  generalCode: string = '))=((asdñ12345678$$%&/(';

  initialItems: Card[] = [];
  items: Card[] = [];
  itemsEnabled: Card[] = [];

  constructor() {

  }

  ngOnInit(): void {
    //this.items = Data.initialItems;
  }

  getProgress(){
    if(this.itemsEnabled.length > 0){
      return Math.round(this.itemsEnabled.length * 100 / this.initialItems.length);
    }else{
      return 0;
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    var items_unlocked : Card[]

    if(form.value.code == "Ejemplos"){
      items_unlocked = Data.examples
    }else if(form.value.code == this.generalCode){
      items_unlocked = Data.initialItems
    }else{
      items_unlocked = Data.initialItems.filter(card =>
        {
          console.log("------------ " )
          console.log("------------> " + form.value.code)
          console.log("------------> " + card.password)
          console.log("------------ " )

          return card.password == form.value.code;
        }
        )
    }

    this.error = items_unlocked.length == 0
    this.success = items_unlocked.length > 0

    this.items = this.shuffle(items_unlocked)
    this.initialItems = this.shuffle(items_unlocked)
    this.itemsEnabled = []

    this.showRoulette = this.success;
  }

  getDistinctCards() : Card[]{
    return this.items.filter((thing, i, arr) => {
      return arr.indexOf(arr.find(t => t.tag === thing.tag)) === i;
    });
  }

  getDistinctTags() : string[]{
    let options : string[] = []
    this.getDistinctCards().map(card => options.push(card.tag))
    return options;
  }

  optionSelected(option: string) {
    let card = this.items.find(card => card.tag === option )

    this.items = this.items.filter(item => item !== card)

    this.itemsEnabled.unshift(card);
  }

  shuffle(list) {
    return list.reduce((p, n) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);
  };
}
