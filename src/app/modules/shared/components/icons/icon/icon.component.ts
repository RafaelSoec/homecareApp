import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input('icon')
  public icon: string;

  @Input('color')
  public color: string = '';

  @Input('height')
  public height: string = '15px';

  @Input('width')
  public width: string = '15px';

  public stilez = {};

  constructor() {}

  ngOnInit(): void {
    //verificar se a cor enviada é uma cor valida ou uma variavel no sistema de variaveis de cores.
    if (!this.color.includes('#')) {
      this.color = 'var(--' + this.color + ')';
    }
  }
}
