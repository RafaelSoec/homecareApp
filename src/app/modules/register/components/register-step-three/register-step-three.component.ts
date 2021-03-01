import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss'],
})
export class RegisterStepThreeComponent implements OnInit {
  @Input('form')
  public form: FormGroup;

  @Output()
  public valid = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.form.valueChanges.subscribe((val) => {
      this.valid.emit(this.form.valid);
    });
  }
}
