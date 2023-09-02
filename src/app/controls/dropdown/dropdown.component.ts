import { Component,Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/control-base';
import { DropdownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  @Input() meta!: DropdownControl;
  @Input() form!:FormGroup;

  constructor() {}

  ngOnInit(): void {
    
  }
}
