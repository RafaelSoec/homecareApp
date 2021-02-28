import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-msg',
  templateUrl: './text-msg.component.html',
  styleUrls: ['./text-msg.component.scss'],
})
export class TextMsgComponent implements OnInit {
  @Input('validated')
  public validated: boolean = true;

  @Input('fontSize')
  public fontSize: number = 12;

  @Input('text')
  public text: string;

  @Input('type')
  public type: 'success' | 'danger' | 'warning';

  public clazz: string;

  constructor() {}

  ngOnInit() {
    switch (this.type) {
      case 'success':
        this.clazz = 'success';
        break;
      case 'warning':
        this.clazz = 'warning';
        break;
      case 'danger':
        this.clazz = 'danger';
        break;
    }
  }
}
