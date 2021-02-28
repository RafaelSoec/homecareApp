import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Header, HeaderIcon } from '../../models/classes/util/Header';
import { HeaderService } from '../../services/HeaderService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public dataHeader: Header = null;

  constructor(private _headerService: HeaderService) {}

  ngOnInit(): void {
    this._headerService.getHeader().subscribe((dataHeader: Header) => {
      this.dataHeader = dataHeader;
      if (this.dataHeader && !this.dataHeader.title) {
        this.dataHeader.title = environment.nameApp;
      }
    });
  }

  public activeCallback(item: HeaderIcon) {
    if (item && item.callback) {
      item.callback();
    }
  }
}
