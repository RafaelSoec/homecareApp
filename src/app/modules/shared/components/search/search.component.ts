import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input('placeholder')
  public placeholder: string;

  @Output()
  public find = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public emitFind(value: string) {
    this.find.emit(value);
  }
}
