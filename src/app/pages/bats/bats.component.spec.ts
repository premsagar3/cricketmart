import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsComponent } from './bats.component';

describe('BatsComponent', () => {
  let component: BatsComponent;
  let fixture: ComponentFixture<BatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
