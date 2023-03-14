import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketpadComponent } from './cricketpad.component';

describe('CricketpadComponent', () => {
  let component: CricketpadComponent;
  let fixture: ComponentFixture<CricketpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketpadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
