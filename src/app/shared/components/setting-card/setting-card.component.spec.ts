import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCardComponent } from './setting-card.component';

describe('SettingCardComponent', () => {
  let component: SettingCardComponent;
  let fixture: ComponentFixture<SettingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingCardComponent]
    });
    fixture = TestBed.createComponent(SettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
