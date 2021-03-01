import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-step-four',
  templateUrl: './register-step-four.component.html',
  styleUrls: ['./register-step-four.component.scss'],
})
export class RegisterStepFourComponent implements OnInit {
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
