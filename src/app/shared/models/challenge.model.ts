export class Challenge {
  youtubeId: string;
  description: string;
  answer: string;
  error: boolean;
  success: boolean;

  constructor(youtubeId:string, description:string, answer:string, error:boolean, success:boolean) {
    this.youtubeId=youtubeId;
    this.description=description;
    this.answer=answer;
    this.error=error;
    this.success=success;
 }
}
