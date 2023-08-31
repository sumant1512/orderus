import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefFooterComponent } from './chef-footer.component';

describe('ChefFooterComponent', () => {
  let component: ChefFooterComponent;
  let fixture: ComponentFixture<ChefFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefFooterComponent],
    });
    fixture = TestBed.createComponent(ChefFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
