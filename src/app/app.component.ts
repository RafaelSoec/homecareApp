import { Component } from '@angular/core';
import { Client } from './modules/shared/models/classes/user/Client';
import { AppGendersEnum } from './modules/shared/models/enums/AppGendersEnum';
import { AppIconsEnum } from './modules/shared/models/enums/AppIconsEnum';
import { AppRoutesEnum } from './modules/shared/models/enums/AppRoutesEnum';
import { ClientService } from './modules/shared/services/ClientService';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public client: Client = new Client();

  public appPages = [];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this.client = this._clientService.getClient();
    this._setPages();
  }

  private _setPages() {
    const gender =
      this.client.gender == AppGendersEnum.MALE
        ? AppIconsEnum.MAN
        : AppIconsEnum.WOMAN;

    this.appPages.push({
      title: 'Meu Perfil',
      url: '/folder/Inbox',
      icon: gender,
    });
    this.appPages.push({
      title: 'Configurações',
      url: '/folder/Trash',
      icon: AppIconsEnum.GROUP,
    });
    this.appPages.push({
      title: 'Sair',
      url: AppRoutesEnum.SECURITY,
      icon: AppIconsEnum.LOG_OUT,
    });
  }
}
