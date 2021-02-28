import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modules/shared/models/classes/user/Client';
import { AppIconsEnum } from 'src/app/modules/shared/models/enums/AppIconsEnum';
import { ClientService } from 'src/app/modules/shared/services/ClientService';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent implements OnInit {
  public client: Client = new Client();
  public notification = AppIconsEnum.NOTIFICATION_ACTIVE;
  public filteredCards: Array<{
    icon: string;
    name: string;
    color: string;
  }> = [];
  public cards: Array<{ icon: string; name: string; color: string }> = [
    { icon: AppIconsEnum.HEART, name: 'Saúde', color: 'primary' },
    { icon: AppIconsEnum.AESTHETICS, name: 'Estética', color: 'primary' },
    { icon: AppIconsEnum.TRAINE, name: 'Treinamento', color: 'primary' },
    { icon: AppIconsEnum.NOTIFICATION, name: 'Pets', color: 'primary' },
  ];

  constructor(private _clientService: ClientService) {}

  ngOnInit() {
    this.client = this._clientService.getClient();
    this.filteredCards = this.cards;
  }

  public find(value: string) {
    if (value) {
      this.filteredCards = this.filteredCards.filter((card) =>
        card.name.toLowerCase().includes(value)
      );
    } else {
      this.filteredCards = this.cards;
    }
  }
}
