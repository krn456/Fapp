import { Component, OnChanges,Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/control-base';
import { MetaService } from 'src/app/services/meta.service';


@Component({
  selector: 'app-dynamic-form-video',
  templateUrl: './dynamic-form-video.component.html',
  styleUrls: ['./dynamic-form-video.component.css']
})
export class DynamicFormVideoComponent implements OnChanges {
  @Input() meta: ControlBase[] =[] ;
  @Input() data: any = {};
  form!: FormGroup;
  payLoad ='';

  constructor(private metaService:MetaService) {}


  ngOnChanges(){
    this.form =this.metaService.toFormGroup(this.meta, this.data);
  }


  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
 