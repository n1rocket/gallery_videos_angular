export class Challenge {
  youtubeId: string;
  description: string;
  answer: string;
  error: boolean;
  success: boolean;
  sended_by: String;

  constructor(youtubeId:string, description:string, answer:string, error:boolean, success:boolean, sended_by: String) {
    this.youtubeId=youtubeId;
    this.description=description;
    this.answer=answer;
    this.error=error;
    this.success=success;
    this.sended_by=sended_by;
 }
}
