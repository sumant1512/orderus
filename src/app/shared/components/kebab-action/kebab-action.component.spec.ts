import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KebabActionComponent } from './kebab-action.component';

describe('KebabActionComponent', () => {
  let component: KebabActionComponent;
  let fixture: ComponentFixture<KebabActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KebabActionComponent]
    });
    fixture = TestBed.createComponent(KebabActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
