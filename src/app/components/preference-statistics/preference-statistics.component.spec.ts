import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceStatisticsComponent } from './preference-statistics.component';

describe('PreferenceStatisticsComponent', () => {
  let component: PreferenceStatisticsComponent;
  let fixture: ComponentFixture<PreferenceStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferenceStatisticsComponent]
    });
    fixture = TestBed.createComponent(PreferenceStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
