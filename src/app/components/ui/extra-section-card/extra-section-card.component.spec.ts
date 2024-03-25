import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSectionCardComponent } from './extra-section-card.component';

describe('ExtraSectionCardComponent', () => {
  let component: ExtraSectionCardComponent;
  let fixture: ComponentFixture<ExtraSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraSectionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
