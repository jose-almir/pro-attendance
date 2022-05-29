import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLabelComponent } from './hr-label.component';

describe('HrLabelComponent', () => {
  let component: HrLabelComponent;
  let fixture: ComponentFixture<HrLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
