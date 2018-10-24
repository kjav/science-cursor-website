import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperRatingListComponent } from './paper-rating-list.component';

describe('PaperRatingListComponent', () => {
  let component: PaperRatingListComponent;
  let fixture: ComponentFixture<PaperRatingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperRatingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperRatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
