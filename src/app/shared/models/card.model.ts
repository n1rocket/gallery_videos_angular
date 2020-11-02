export class Card {
  type: string;
  tag: string;
  password: string;
  data: any;

  public classReference = Card;

  static TYPE_VIDEO: string = 'VIDEO';
  static TYPE_PHOTO: string = 'PHOTO';
  static TYPE_AUDIO: string = 'AUDIO';
  static TYPE_CHALLENGE_VIDEO: string = 'CHALLENGE_VIDEO';

  static TAG_RETO: string = 'RETO';
  static TAG_RECUERDO: string = 'RECUERDO';
  static TAG_HUMOR: string = 'HUMOR';
  static TAG_ANECDOTA: string = 'ANÉCDOTA';
  static TAG_SORPRESA: string = 'SORPRESA';
  static TAG_MUSICA: string = 'MÚSICA';

  constructor(type: string, tag: string, password: string, data: any) {
    this.type = type;
    this.tag = tag;
    this.password = password;
    this.data = data;
  }
}
