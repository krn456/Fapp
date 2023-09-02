import { Component,Input,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/control-base';
import { CheckboxControl } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() meta!: CheckboxControl;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    
  }

}
