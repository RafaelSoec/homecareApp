import { Component, OnInit } from '@angular/core';
import { Header, HeaderIcon } from '../shared/models/classes/util/Header';
import { HeaderService } from '../shared/services/HeaderService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private _headerService: HeaderService) {}

  ngOnInit(): void {
    this._setHeader();
  }

  private _setHeader(): void {
    let header = new Header().builder().build();
    this._headerService.setHeader(header);
  }

  public goBack() {
    console.log('voltar');
  }
}
