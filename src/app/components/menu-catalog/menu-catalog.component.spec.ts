import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatalogComponent } from './menu-catalog.component';

describe('MenuCatalogComponent', () => {
  let component: MenuCatalogComponent;
  let fixture: ComponentFixture<MenuCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCatalogComponent]
    });
    fixture = TestBed.createComponent(MenuCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
