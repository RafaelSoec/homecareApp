import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/shared/models/classes/user/User';
import { Messages } from 'src/app/modules/shared/models/constants/Messages';
import { AppRoutesEnum } from 'src/app/modules/shared/models/enums/AppRoutesEnum';
import { Validation } from 'src/app/modules/shared/models/interfaces/Validation';
import { HeaderService } from 'src/app/modules/shared/services/HeaderService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public validation: Validation = { validate: true, text: '' };

  constructor(
    private _router: Router,
    private _builder: FormBuilder,
    private _headerService: HeaderService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this._headerService.eraseHeader();
  }

  public setForm() {
    this.form = this._builder.group({
      mail: [
        { value: null, disabled: false },
        [Validators.required, Validators.email],
      ],
      password: [
        { value: null, disabled: false },
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }

  public logIn() {
    this._router.navigate([AppRoutesEnum.HOME]);
    // if (this.form.valid) {
    //   this.validation.validate = true;
    //   this._router.navigate([AppRoutesEnum.HOME]);
    // } else {
    //   this.validation.validate = false;
    //   if (this.form.controls.mail.errors) {
    //     this.validation.text = Messages.INVALID_MAIL;
    //   } else {
    //     this.validation.text = Messages.INVALID_PASSWORD;
    //   }
    // }
  }
}
