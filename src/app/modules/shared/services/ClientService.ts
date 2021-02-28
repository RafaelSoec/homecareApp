import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/classes/user/Client';
import { AppGendersEnum } from '../models/enums/AppGendersEnum';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  getClient(): Client {
    let client = new Client();
    client.gender = AppGendersEnum.FEMALE;
    client.name = 'Usuário Teste';

    return client;
  }
}
