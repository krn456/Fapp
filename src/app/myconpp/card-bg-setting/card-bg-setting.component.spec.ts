import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBgSettingComponent } from './card-bg-setting.component';

describe('CardBgSettingComponent', () => {
  let component: CardBgSettingComponent;
  let fixture: ComponentFixture<CardBgSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBgSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBgSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
