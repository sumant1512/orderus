import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCardTwoComponent } from './menu-item-card-two.component';

describe('MenuItemCardTwoComponent', () => {
  let component: MenuItemCardTwoComponent;
  let fixture: ComponentFixture<MenuItemCardTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemCardTwoComponent]
    });
    fixture = TestBed.createComponent(MenuItemCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
