import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css'],
})
export class RouletteComponent implements OnInit {
  options: string[] = ['Recuerdo', 'Humor', 'Reto', 'Música', 'Audio',];

  startAngle: number = 0;
  arc: number = Math.PI / (this.options.length / 2);
  spinTimeout = null;

  spinArcStart: number = 10;
  spinTime: number = 0;
  spinTimeTotal: number = 0;
  spinAngleStart: number = 0;

  width = 300;
  height = 300;

  ctx: CanvasRenderingContext2D;
  @ViewChild('canvas', {static: false})
  canvas: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.drawRouletteWheel();
  }

  drawRouletteWheel(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    let halfWidth = this.width/2;
    let halfHeight = this.height/2;

    let outsideRadius = halfWidth;
    let insideRadius = 70;
    let textRadius = 100;


    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;

    this.ctx.font = 'bold 18px Helvetica, Arial';

    for (var i = 0; i < this.options.length; i++) {
      let angle = this.startAngle + i * this.arc;
      this.ctx.fillStyle = this.getColor(i, this.options.length);

      this.ctx.beginPath();
      this.ctx.arc(halfWidth, halfHeight, outsideRadius, angle, angle + this.arc, false);
      this.ctx.arc(halfWidth, halfHeight, insideRadius, angle + this.arc, angle, true);
      this.ctx.stroke();
      this.ctx.fill();

      this.ctx.save();
      this.ctx.shadowOffsetX = -1;
      this.ctx.shadowOffsetY = -1;
      this.ctx.shadowBlur = 0;
      //this.ctx.shadowColor = 'rgb(220,220,220)';
      this.ctx.fillStyle = 'white';
      this.ctx.translate(
        halfWidth + Math.cos(angle + this.arc / 2) * textRadius,
        halfHeight + Math.sin(angle + this.arc / 2) * textRadius
      );
      this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
      let text = this.options[i];
      this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
      this.ctx.restore();
    }

    //Arrow
    this.ctx.fillStyle = 'black';
    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth - 4, halfHeight - (outsideRadius + 5));
    this.ctx.lineTo(halfWidth + 4, halfHeight - (outsideRadius + 5));
    this.ctx.lineTo(halfWidth + 4, halfHeight - (outsideRadius - 5));
    this.ctx.lineTo(halfWidth + 9, halfHeight - (outsideRadius - 5));
    this.ctx.lineTo(halfWidth + 0, halfHeight - (outsideRadius - 13));
    this.ctx.lineTo(halfWidth - 9, halfHeight - (outsideRadius - 5));
    this.ctx.lineTo(halfWidth - 4, halfHeight - (outsideRadius - 5));
    this.ctx.lineTo(halfWidth - 4, halfHeight - (outsideRadius + 5));
    this.ctx.fill();
  }

  byte2Hex(n): string {
    let nybHexString = '0123456789ABCDEF';
    return (
      String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
      nybHexString.substr(n & 0x0f, 1)
    );
  }

  RGB2Color(r, g, b): string {
    let color = '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    return color;
  }

  getColor(item, maxitem): string {
    let phase = 0;
    let center = 128;
    let width = 127;
    let frequency = (Math.PI * 2) / maxitem;

    let red = Math.sin(frequency * item + 2 + phase) * width + center;
    let green = Math.sin(frequency * item + 0 + phase) * width + center;
    let blue = Math.sin(frequency * item + 4 + phase) * width + center;

    return this.RGB2Color(red, green, blue);
  }

  spin(): void {
    this.spinAngleStart = Math.random() * 10 + 10;
    this.spinTime = 0;
    this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
    this.rotateWheel();
  }

  rotateWheel(): void {
    this.spinTime += 30;
    if (this.spinTime >= this.spinTimeTotal) {
      this.stopRotateWheel();
      return;
    }
    let spinAngle =
      this.spinAngleStart -
      this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
    this.startAngle += (spinAngle * Math.PI) / 180;
    this.drawRouletteWheel();
    this.spinTimeout = setTimeout( () => {
      this.rotateWheel();
  }, 30);
  }

  stopRotateWheel(): void {
    clearTimeout(this.spinTimeout);
    let degrees = (this.startAngle * 180) / Math.PI + 90;
    let arcd = (this.arc * 180) / Math.PI;
    let index = Math.floor((360 - (degrees % 360)) / arcd);
    this.ctx.save();
    this.ctx.font = 'bold 26px Helvetica, Arial';
    let text = this.options[index];
    this.ctx.fillText(
      text,
      this.width/2 - this.ctx.measureText(text).width / 2,
      this.height/2 + 10
    );
    this.ctx.restore();
  }

  easeOut(t: number, b: number, c: number, d: number): number {
    let ts = (t /= d) * t;
    let tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }
}
