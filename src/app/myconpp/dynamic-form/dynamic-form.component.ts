import { Component  ,Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardBase } from 'src/app/card-base';
import { CardControlService } from 'src/app/services/card-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers :[CardControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: CardBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: CardControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as CardBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }


}
