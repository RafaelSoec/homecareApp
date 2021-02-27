import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input('stylez')
  public stylez: any = {}

  @Input('clazz')
  public clazz: any = {}

  constructor() { }

  ngOnInit(): void {
    this.clazz = "footer " + this.clazz;
  }

}
