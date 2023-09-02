import { Injectable } from '@angular/core';
import { CardBase } from '../card-base';
import { CardDropdown } from '../card-dropdown';
import { CardTextbox } from '../card-textbox';
import { of } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class FieldsService {


  // TODO: get from a remote source of fields metadata
getQuestions() {  

  const questions: CardBase<string>[] = [

    new CardDropdown({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' }
      ],
      order: 3
    }),

    new CardTextbox({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new CardTextbox({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })
  ];

  return of(questions.sort((a, b) => a.order - b.order));
}

}
