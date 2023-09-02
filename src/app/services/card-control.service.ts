import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {CardBase} from '../card-base';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class CardControlService {


  toFormGroup(question: CardBase<string>[] ) {
    const group: any = {};

    question.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
