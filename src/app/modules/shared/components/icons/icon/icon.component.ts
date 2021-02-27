import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input('icon')
  public icon: string;

  @Input('cor')
  public cor: string;

  @Input('altura')
  public altura: string = '15px';

  @Input('largura')
  public largura: string = '15px';

  public estilo = {};

  constructor() {}
  ngOnInit(): void {
    if (this.icon) {
      this.estilo = { width: this.largura, height: this.altura };
    }
  }
}
