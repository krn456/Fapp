import { JsonPipe } from '@angular/common';
import { Component, Self } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder,NgControl } from '@angular/forms';



import { ConfigService } from 'src/app/services/config.service';






@Component({
  selector: 'app-card-bg-setting',
  templateUrl: './card-bg-setting.component.html',
  styleUrls: ['./card-bg-setting.component.css']
})


export class CardBgSettingComponent {

  // constructor(private configServises: ConfigService) { }

  searchVal = '';

  No = 'No';
  Yes: any = "Yes";

  bgColor: any = '';
  hdrColor = '';
  txtColor = '';
  mskColor = '';
  ftrColor = '';

  searchList: any[] = [];
  itemList: any[] = [];

  submitted = false;

  constructor(private configServises: ConfigService, private fb: FormBuilder) { }
  // crdBorder = [{
  //   id: 1,
  //   name: 'CrdBorder',
  //   value: 'No',
  //   label: 'No'
  // },
  // {
  //   id: 2,
  //   name: 'CrdBorder',
  //   value: 'Yes',
  //   label: 'Yes',
  // }];

  // constructor(private fb: FormBuilder) { }



  cardsBgForm: FormGroup = this.fb.group({

    Status: new FormControl('', [
      Validators.required,
    ]),
    Faculty: new FormControl('', [
      Validators.required,
    ]),
    Course: new FormControl('', [
      Validators.required,
    ]),
    Branch: new FormControl('', [
      Validators.required,
    ]),

    bgSetting: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
      Validators.pattern('^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'),
      // forbiddenNameValidator(/bob/i)

    ]),
    hdrSetting: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
      Validators.pattern('^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'),
      // forbiddenNameValidator(/bob/i)

    ]),
    txtSetting: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
      Validators.pattern('^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'),
      // forbiddenNameValidator(/bob/i)

    ]),
    mskSetting: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
      Validators.pattern('^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'),
      // forbiddenNameValidator(/bob/i)

    ]),
    ftrSetting: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
      Validators.pattern('^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'),
      // forbiddenNameValidator(/bob/i)
    ]),

    crdBorder: new FormControl('', [
      Validators.required,
    ]),
  });


  get Validate() {
    return this.cardsBgForm.controls;
  }

  // get Name() {
  //   return this.cardsBgForm.get('Name');
  // }


  users: any;
  // constructor(private configServises: ConfigService, private fb: FormBuilder) { }
  // constructor(private configServises: ConfigService) { }



  // onRadioChange(e: any) {
  //   console.log("radio value=" + e.target.value);
  // }


  ngOnInit(): void {

    this.configServises.getUsers().subscribe(data => {
      this.users = data;
    }, (err) => {
      console.log("Unable to load data from URL!" + err);
    })

  }




  onSubmit() {

    // const bodydt = {
    //   title: this.cardsBgForm.value.Name,
    //   body: this.cardsBgForm.value.Course,

    // };

    // this.configServises.postUsers(bodydt).subscribe(data => {
    //   console.log(data);
    // }, (err) => {
    //   console.log("UnBLE TO POST DATA!" + err);
    // })

    
    this.submitted = true;

    if(this.cardsBgForm.invalid) {
      return 
    }
    if(this.cardsBgForm.valid) {
    console.warn(this.cardsBgForm.value);

    this.itemList.push(this.cardsBgForm.value);
     console.warn("inserted " + this.itemList)


    var j = this.searchList.length;
    for (let i = 0; i < j; i++) {
      this.searchList.pop();
    }


    if (!this.searchVal && this.searchVal === '') {
      for (const allValue of this.itemList) {
        this.searchList.push(allValue);
      }

    }
    
    alert("Success!");
    this.cardsBgForm.reset();
    this.submitted=false;
  }
  // } else {
  //   return;
  // }
  }


  // SearchBtn() {

  //   // console.log("lenght of my list is:" +this.searchList.length);

  //   var j = this.searchList.length;
  //   for (let i = 0; i < j; i++) {
  //     this.searchList.pop();
  //   }
  //   // console.warn("newlist is =" + this.searchList.values);

  //   // console.log(this.itemList[this.Search.value]);
  //   let search;

  //   for (search of this.itemList) {
  //     this.searchList.push(search);
  //     // console.warn("values =" + this.searchList);

  //   }

  //   // for (let i = 0; i < 3; i++) {
  //   //   console.log ("Block statement execution no." + i);
  //   // }
  // }






  checkSearchVal() {
    // this.users.slice();
    // const filteredUsers: User[] = [];

    var j = this.searchList.length;
    for (let i = 0; i < j; i++) {
      this.searchList.pop();
    }


    if (!this.searchVal && this.searchVal === '') {
      for (const allValue of this.itemList) {
        this.searchList.push(allValue);
      }

    }

 
    if (this.searchVal && this.searchVal !== '') {
      for (const selectedUser of this.itemList) {
        if (selectedUser.Status.toLowerCase().search(this.searchVal.toLowerCase()) !== -1 ||
          selectedUser.Course.toLowerCase().search(this.searchVal.toLowerCase()) !== -1) {
          // filteredUsers.push(selectedUser);
          this.searchList.push(selectedUser);
        }
      }
      // this.users = filteredUsers.slice();
      this.searchList.slice();
    }
  }
}




