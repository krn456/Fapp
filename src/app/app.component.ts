import { Component, OnInit } from '@angular/core';
import { CardBase } from './card-base';
import { FieldsService } from './services/fields.service';
import { Observable } from 'rxjs';
import { ControlBase } from './control-base';
import { MetaService } from './services/meta.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

 
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [FieldsService]
})
export class AppComponent implements OnInit {
  title = 'Fapp';


  meta!: ControlBase[];
  data!:any;
  constructor(private metaService: MetaService,
    private dataService: DataService) { }

async ngOnInit() {
  this.refresh();
}

async refresh () {
  this.dataService.getData().subscribe({
    next:(res)=>{
      console.log('res',res);
      this.data= res;
    }
  });
  this.meta = (await this.metaService.getMeta()) as ControlBase [];
  // this.metaService.getMeta().subscribe({
  //   next:(res) => {

  //   }

  // })
  console.log("app com data value:" +this.meta);
}


  // questions$: Observable<CardBase<any>[]>;

  // constructor(service: FieldsService) {
  //   this.questions$ = service.getQuestions();
  // }
}
