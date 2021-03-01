import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BrMaskModel } from 'br-mask';
import { Messages } from '../../models/constants/Messages';
import { DataUtils } from '../../models/constants/util/DataUtils';
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

  @Input('background')
  public background: string;

  @Input('color')
  public color: string = 'primary';

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

  @Input('position')
  public position: 'stacked' | 'fixed' | 'floating' = 'stacked';

  @Input('maxlength')
  public maxlength: number = 300;

  @Input('min')
  public min: string = '';

  @Input('max')
  public max: string = '';

  @Input('value')
  public value: any = null;

  @Input('formController')
  public formController: FormControl = null;

  @Input('fontSize')
  public fontSize: number = 14;

  @Input('mask')
  public mask: BrMaskModel = null;

  @Input('textTransform')
  public textTransform: 'uppercase' | 'lowercase' | 'capitalize' | '' = '';

  @Input('border')
  public border: 'none' | 'top' | 'bottom' | 'full' | 'left' | 'right' =
    'bottom';

  @Output() formControllerChange = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  public stylezz = {
    fontSize: null,
    borderBottom: null,
    borderTop: null,
    borderLeft: null,
    borderRight: null,
  };
  public typeToogle: boolean = false;
  public customPickerOptions: any;
  public dataRef = new Date();

  constructor() {}

  ngOnInit() {
    // this.valueChange.emit(this.value);
    if (this.formController) {
      this.value = this.formController.value;
    }
    //verificar se a cor enviada é uma cor valida ou uma variavel no sistema de variaveis de cores.
    if (!this.color.includes('#')) {
      this.color = 'var(--' + this.color + ')';
    }

    this.stylezz.fontSize = `${this.fontSize}px`;
    this.setBorder();
  }

  public setBorder() {
    const borderColor = `1px solid ${this.color}`;
    switch (this.border) {
      case 'bottom':
        this.stylezz.borderBottom = borderColor;
        break;
      case 'top':
        this.stylezz.borderTop = borderColor;
        break;
      case 'right':
        this.stylezz.borderRight = borderColor;
        break;
      case 'left':
        this.stylezz.borderLeft = borderColor;
        break;
      case 'full':
        this.stylezz.borderBottom = borderColor;
        this.stylezz.borderTop = borderColor;
        this.stylezz.borderRight = borderColor;
        this.stylezz.borderLeft = borderColor;
        break;
      default:
        this.stylezz.borderBottom = this.border;
        this.stylezz.borderTop = this.border;
        this.stylezz.borderRight = this.border;
        this.stylezz.borderLeft = this.border;
        break;
    }
  }

  public setForm(): void {
    if (this.formController) {
      this.formController.setValue(this.value);
      this.readonly = this.formController.disabled;
      this.validation.validate = this.formController.valid;
      this.formControllerChange.emit(this.formController);
      // this.formController.markAsTouched();
    }
  }

  public emitVal(): void {
    this.transformText();
    this.makeValidations();
    this.setForm();

    this.valueChange.emit(this.value);
  }

  public transformText() {
    if (this.textTransform) {
      let value: string = this.value;
      if (this.textTransform == 'uppercase') {
        this.value = value.toUpperCase();
      } else if (this.textTransform == 'lowercase') {
        this.value = value.toLowerCase();
      }
    }
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
