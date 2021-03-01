import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss'],
})
export class RegisterStepOneComponent implements OnInit {
  @Input('form')
  public form: FormGroup;

  @Output()
  public valid = new EventEmitter<boolean>();

  public appName = environment.nameApp;

  ngAfterViewChecked() {
    this.form.valueChanges.subscribe((val) => {
      this.valid.emit(this.form.controls['name'].valid);
    });
  }

  ngOnInit() {
    this.valid.emit(false);
  }
}
