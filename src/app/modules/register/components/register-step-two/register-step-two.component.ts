import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataUtils } from 'src/app/modules/shared/models/constants/util/DataUtils';
import { Validation } from 'src/app/modules/shared/models/interfaces/Validation';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss'],
})
export class RegisterStepTwoComponent implements OnInit {
  @Input('form')
  public form: FormGroup;

  @Output()
  public valid = new EventEmitter<boolean>();

  public minDate: string;
  public maxDate: string;
  public surname: string;
  public name: string;

  constructor() {}

  ngOnInit() {
    this._setDates();
    this.getSurname();

    this.valid.emit(false);
    this.form.valueChanges.subscribe((val) => {
      this.valid.emit(this.form.controls['birthday'].valid);
    });
  }

  public getSurname() {
    this.name = this.form.controls['name'].value;
    this.surname = this.name;

    if (this.name.includes(' ')) {
      const index = this.name.indexOf(' ');
      this.surname = this.name.substring(0, index);
    }
  }

  private _setDates() {
    const max = new Date();
    const min = DataUtils.subtract(max, 120, 'years');
    const format = 'YYYY-MM-DD';

    this.minDate = DataUtils.dataConvertDateToString(min, format);
    this.maxDate = DataUtils.dataConvertDateToString(max, format);
  }
}
