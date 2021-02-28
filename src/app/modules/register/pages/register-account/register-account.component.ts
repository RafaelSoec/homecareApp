import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from 'src/app/modules/shared/models/classes/util/Header';
import { AppRoutesEnum } from 'src/app/modules/shared/models/enums/AppRoutesEnum';
import { Validation } from 'src/app/modules/shared/models/interfaces/Validation';
import { HeaderService } from 'src/app/modules/shared/services/HeaderService';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  public form: FormGroup;
  public validation: Validation = { validate: true, text: '' };

  constructor(
    private _headerService: HeaderService,
    private _builder: FormBuilder,
    private _router: Router
  ) {
    this._setForm();
  }

  ngOnInit(): void {
    this._setHeader();
  }

  private _setHeader(): void {
    let header = new Header()
      .builder()
      .goBack(() => {
        this.goBack();
      })
      .title('Cadastro')
      .showMenuIcon(false)
      .build();
    this._headerService.setHeader(header);
  }

  private _setForm() {
    this.form = this._builder.group({
      mail: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
    });
  }

  public goBack() {
    this._router.navigate([AppRoutesEnum.SECURITY]);
  }
}
