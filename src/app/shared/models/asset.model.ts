export class Asset {
  asset: string;
  description: string;
  sended_by: String;

  constructor(asset: string, description: string, sended_by: string) {
    this.asset = asset;
    this.description = description;
    this.sended_by = sended_by;
  }
}
