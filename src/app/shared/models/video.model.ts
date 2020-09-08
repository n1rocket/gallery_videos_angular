export class Video {
  youtube_id: string;
  sended_by: String;

  constructor(youtube_id: string, sended_by: string) {
    this.youtube_id = youtube_id;
    this.sended_by = sended_by;
  }
}
