import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';

import { CardBgSettingComponent } from './myconpp/card-bg-setting/card-bg-setting.component';
import {DynamicFormFieldsComponent} from './myconpp/dynamic-form-fields/dynamic-form-fields.component';
import {DynamicFormComponent} from './myconpp/dynamic-form/dynamic-form.component';

import { DFormComponent } from './myconpp/d-form/d-form.component';

// const routes: Routes = [];
const routes: Routes = [
  { path :'', redirectTo:'', pathMatch:'full'},
  { path: 'card-bg-setting-component', component: CardBgSettingComponent },
  // { path: 'second-component', component: SecondComponent },
  {path:'dynamic-form-fields-component', component:DynamicFormFieldsComponent},
  {path:'dynamic-form-component', component:DynamicFormComponent},
  {path:'dForm-component', component:DFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

