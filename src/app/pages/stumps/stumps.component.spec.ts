import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StumpsComponent } from './stumps.component';

describe('StumpsComponent', () => {
  let component: StumpsComponent;
  let fixture: ComponentFixture<StumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
