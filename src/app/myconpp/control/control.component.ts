import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ControlBase } from 'src/app/control-base';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() control!:ControlBase;
  @Input() form!: FormGroup;

  ngOnInit(): void {}



}
