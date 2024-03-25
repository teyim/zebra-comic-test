import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeReadingCardComponent } from './resume-reading-card.component';

describe('ResumeReadingCardComponent', () => {
  let component: ResumeReadingCardComponent;
  let fixture: ComponentFixture<ResumeReadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeReadingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeReadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
