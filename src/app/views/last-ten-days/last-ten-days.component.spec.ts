import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTenDaysComponent } from './last-ten-days.component';

describe('LastTenDaysComponent', () => {
  let component: LastTenDaysComponent;
  let fixture: ComponentFixture<LastTenDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LastTenDaysComponent]
    });
    fixture = TestBed.createComponent(LastTenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
