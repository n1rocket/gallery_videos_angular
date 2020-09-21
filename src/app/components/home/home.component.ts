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
  error: boolean = false;
  success: boolean = false;
  lock: boolean = true;
  generalCode: string = 'P3l1gr0';

  items: Card[] = [];
  itemsEnabled: Card[] = [];

  constructor() {

  }

  ngOnInit(): void {this.items = Data.initialItems;}

  getProgress(){
    return Math.round(this.itemsEnabled.length * 100 / Data.initialItems.length);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.lock = form.value.code != this.generalCode;

    this.error = this.lock;
    this.success = !this.lock;

    if (this.success) {

      this.itemsEnabled = Data.initialItems;
      this.items = [];

      this.items.forEach((element) => {
        if (element.data instanceof Challenge) {
          element.data.success = true;
        }
      });
    }
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
}
