import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCardOneComponent } from './menu-item-card-one.component';

describe('MenuItemCardOneComponent', () => {
  let component: MenuItemCardOneComponent;
  let fixture: ComponentFixture<MenuItemCardOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemCardOneComponent]
    });
    fixture = TestBed.createComponent(MenuItemCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
