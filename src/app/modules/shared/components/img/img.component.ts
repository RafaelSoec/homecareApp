import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input('source')
  public source: string;

  @Input('align')
  public align: 'center' | 'end' | 'start';

  @Input('circular')
  public circular: boolean = false;

  @Input('width')
  public width: number = 60;

  @Input('height')
  public height: number = 60;

  public clazz: string = '';

  constructor() {}

  ngOnInit() {
    if (this.align) {
      this.clazz = `text-${this.align}`;
    }
    if (this.circular) {
      this.clazz = this.clazz + ` rounded-circle`;
    }
  }
}
