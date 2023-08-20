import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealImagesComponent } from './meal-images.component';

describe('MealImagesComponent', () => {
  let component: MealImagesComponent;
  let fixture: ComponentFixture<MealImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealImagesComponent]
    });
    fixture = TestBed.createComponent(MealImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
