import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from 'src/app/modules/shared/models/classes/util/Header';
import { AppRoutesEnum } from 'src/app/modules/shared/models/enums/AppRoutesEnum';
import { HeaderService } from 'src/app/modules/shared/services/HeaderService';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  public form: FormGroup;
  public selectedStep: number = 1;
  public valid: boolean = false;

  constructor(
    private _headerService: HeaderService,
    private _builder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._setForm();
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      if (params['passo']) {
        this.selectedStep = params['passo'];
      }
    });

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
      mail: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.minLength(10)]],
      birthday: [null, [Validators.required]],
    });
  }

  public goBack() {
    if (this.selectedStep <= 1) {
      this._router.navigate([AppRoutesEnum.SECURITY]);
    } else {
      this.selectedStep--;
    }
  }

  public register() {
    if (this.selectedStep != 4) {
      this.selectedStep++;
    } else {
      this._router.navigate([AppRoutesEnum.SECURITY]);
    }
  }

  public validate(valid: boolean) {
    this.valid = valid;
  }
}
