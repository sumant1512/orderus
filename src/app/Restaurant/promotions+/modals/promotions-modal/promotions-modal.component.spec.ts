import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsModalComponent } from './promotions-modal.component';

describe('PromotionsModalComponent', () => {
  let component: PromotionsModalComponent;
  let fixture: ComponentFixture<PromotionsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionsModalComponent]
    });
    fixture = TestBed.createComponent(PromotionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
