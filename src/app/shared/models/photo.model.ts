export class Photo {
  photo_asset: string;
  sended_by: String;

  constructor(photo_asset: string, sended_by: string) {
    this.photo_asset = photo_asset;
    this.sended_by = sended_by;
  }
}
