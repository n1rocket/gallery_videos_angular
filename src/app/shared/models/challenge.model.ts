export class Challenge {
  type:string;
  youtubeId: string;
  description: string;
  answer: string;
  error: boolean;
  success: boolean;
  static REMEMBER: string = "ANÉCDOTA";
  static HUMOR: string = "HUMOR";

  constructor(type:string, youtubeId:string, description:string, answer:string, error:boolean, success:boolean) {
    this.type=type;
    this.youtubeId=youtubeId;
    this.description=description;
    this.answer=answer;
    this.error=error;
    this.success=success;
 }
}
