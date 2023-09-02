import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormVideoComponent } from './dynamic-form-video.component';

describe('DynamicFormVideoComponent', () => {
  let component: DynamicFormVideoComponent;
  let fixture: ComponentFixture<DynamicFormVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
