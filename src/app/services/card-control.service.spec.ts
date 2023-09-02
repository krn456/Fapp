import { TestBed } from '@angular/core/testing';

import { CardControlService } from './card-control.service';

describe('CardControlService', () => {
  let service: CardControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
