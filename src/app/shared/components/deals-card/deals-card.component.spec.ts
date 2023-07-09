import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsCardComponent } from './deals-card.component';

describe('DealsCardComponent', () => {
  let component: DealsCardComponent;
  let fixture: ComponentFixture<DealsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsCardComponent]
    });
    fixture = TestBed.createComponent(DealsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
