import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebrakidsCardComponent } from './zebrakids-card.component';

describe('ZebrakidsCardComponent', () => {
  let component: ZebrakidsCardComponent;
  let fixture: ComponentFixture<ZebrakidsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZebrakidsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZebrakidsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
