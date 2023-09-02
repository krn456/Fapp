
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardBase } from 'src/app/card-base';

@Component({
  selector: 'app-dynamic-form-fields',
  templateUrl: './dynamic-form-fields.component.html',
  styleUrls: ['./dynamic-form-fields.component.css']
})
export class DynamicFormFieldsComponent {
  @Input() question!: CardBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
