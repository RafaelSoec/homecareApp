import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  @Input('readonly')
  public readonly: boolean = false;

  @Input('required')
  public required: boolean = false;

  @Input('type')
  public type: string = 'text';

  @Input('maxlength')
  public maxlength: number = 300;

  @Input('value')
  public value: any = null;

  @Output() valueChange = new EventEmitter<any>();

  public typeToogle: boolean = false;
  public form: FormGroup;

  constructor(private _builder: FormBuilder) {}

  ngOnInit() {
    // if (this.type == 'mail') {
    //   this.form = this._builder.group({
    //     mail: [{ value: this.value, disabled: true }, Validators.email],
    //   });
    // }
  }

  public emitVal() {
    this.valueChange.emit(this.value);
  }
}
