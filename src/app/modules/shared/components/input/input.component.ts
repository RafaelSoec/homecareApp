import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Messages } from '../../models/constants/Messages';
import { RegexUtils } from '../../models/constants/util/RegexUtils';
import { Validation } from '../../models/interfaces/Validation';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input('label')
  public label: string;

  @Input('id')
  public id: string;

  @Input('showValidation')
  public showValidation: boolean = false;

  @Input('readonly')
  public readonly: boolean = false;

  @Input('required')
  public required: boolean = false;

  @Input('validation')
  public validation: Validation = { validate: true, text: null };

  @Input('type')
  public type: string = 'text';

  @Input('maxlength')
  public maxlength: number = 300;

  @Input('value')
  public value: any = null;

  @Input('formController')
  public formController: FormControl = null;

  @Input('fontSize')
  public fontSize: number = 14;

  @Output() valueChange = new EventEmitter<any>();

  public typeToogle: boolean = false;
  public customPickerOptions: any;
  public dataRef = new Date();

  constructor() {}

  ngOnInit() {
    // this.valueChange.emit(this.value);
    if (this.formController) {
      this.value = this.formController.value;
    }
  }

  public setForm(): void {
    if (this.formController) {
      this.formController.setValue(this.value);
      this.readonly = this.formController.disabled;
      this.validation.validate = this.formController.valid;
      // this.formControllerChange.emit(this.formController);
      // this.formController.markAsTouched();
    }
  }

  public emitVal(): void {
    this.valueChange.emit(this.value);
    this.makeValidations();
    this.setForm();
  }

  public makeValidations(): void {
    switch (this.type) {
      case 'mail':
        this.validation.validate = RegexUtils.testMail(this.value);
        this.validation.text = Messages.INVALID_MAIL;
        break;
    }
  }
}
