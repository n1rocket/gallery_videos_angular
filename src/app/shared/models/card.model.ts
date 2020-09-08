export class Card {
  type: string;
  tag: string;
  data: any;

  public classReference = Card;

  static TYPE_VIDEO: string = 'VIDEO';
  static TYPE_PHOTO: string = 'PHOTO';
  static TYPE_CHALLENGE_VIDEO: string = 'CHALLENGE_VIDEO';

  static TAG_RETO: string = 'RETO';
  static TAG_RECUERDO: string = 'RECUERDO';
  static TAG_HUMOR: string = 'HUMOR';
  static TAG_ANECDOTA: string = 'ANÉCDOTA';

  constructor(type: string, tag: string, data: any) {
    this.type = type;
    this.tag = tag;
    this.data = data;
  }
}
