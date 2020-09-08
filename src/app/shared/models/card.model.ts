export class Card {
  type: string;
  data: any;

  public classReference = Card;

  static PHOTO: string = 'FOTO';
  static REMEMBER: string = 'ANÉCDOTA';
  static HUMOR: string = 'HUMOR';

  constructor(type: string, data: any) {
    this.type = type;
    this.data = data;
  }
}
