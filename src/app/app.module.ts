import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBgSettingComponent } from './myconpp/card-bg-setting/card-bg-setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { DynamicFormFieldsComponent } from './myconpp/dynamic-form-fields/dynamic-form-fields.component';
import { DynamicFormComponent } from './myconpp/dynamic-form/dynamic-form.component';
import { DFormComponent } from './myconpp/d-form/d-form.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { LabelComponent } from './controls/label/label.component';
import { DynamicFormVideoComponent } from './myconpp/dynamic-form-video/dynamic-form-video.component';
import { ControlComponent } from './myconpp/control/control.component';




@NgModule({
  declarations: [
    AppComponent,
    CardBgSettingComponent,

    DynamicFormFieldsComponent,
    DynamicFormComponent,
    DFormComponent,
    TextInputComponent,
    DropdownComponent,
    CheckboxComponent,
    LabelComponent,
    DynamicFormVideoComponent,
    ControlComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
