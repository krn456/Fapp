import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/control-base';
// import { CardBase } from './card-base';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() meta!: ControlBase;
  @Input() form!: FormGroup;


  constructor() {}
  ngOnInit(): void {
    
  }
}
