export class Video {
  id: string;
  description: string;
  answer: string;
  error: boolean;
  success: boolean;

  constructor(id:string, description:string, answer:string, error:boolean, success:boolean) {
    this.id=id;
    this.description=description;
    this.answer=answer;
    this.error=error;
    this.success=success;
 }
}
