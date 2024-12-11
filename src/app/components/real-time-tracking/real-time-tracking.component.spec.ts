import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeTrackingComponent } from './real-time-tracking.component';

describe('RealTimeTrackingComponent', () => {
  let component: RealTimeTrackingComponent;
  let fixture: ComponentFixture<RealTimeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
