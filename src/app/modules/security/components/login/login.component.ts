import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/shared/models/classes/User';
import { AppRoutesEnum } from 'src/app/modules/shared/models/enums/AppRoutesEnum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private _router: Router) {}

  ngOnInit() {}

  public logIn() {
    console.log(this.user);
    if (this.user.email && this.user.password) {
      this._router.navigate([AppRoutesEnum.HOME]);
    }
  }
}
