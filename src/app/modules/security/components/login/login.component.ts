import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/shared/models/classes/user/User';
import { AppRoutesEnum } from 'src/app/modules/shared/models/enums/AppRoutesEnum';
import { HeaderService } from 'src/app/modules/shared/services/HeaderService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _router: Router,
    private _builder: FormBuilder,
    private _headerService: HeaderService
  ) {
    this.form = this._builder.group({
      mail: [{ value: null, disabled: false }, Validators.required],
      password: [{ value: null, disabled: false }, Validators.required],
    });
  }

  ngOnInit(): void {
    this._headerService.eraseHeader();
  }

  public logIn() {
    // const user: User = this.form.value;
    // if (user.mail && user.password) {
    this._router.navigate([AppRoutesEnum.HOME]);
    // }
  }
}
