import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperRatingComponent } from './paper-rating.component';

describe('PaperRatingComponent', () => {
  let component: PaperRatingComponent;
  let fixture: ComponentFixture<PaperRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
