import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialConfirmDialogComponent } from './material-confirm-dialog.component';

describe('MaterialConfirmDialogComponent', () => {
  let component: MaterialConfirmDialogComponent;
  let fixture: ComponentFixture<MaterialConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialConfirmDialogComponent]
    });
    fixture = TestBed.createComponent(MaterialConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
