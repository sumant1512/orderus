import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  value = '';

  onChange!: (value?: any) => void;

  onTouch!: (event: any) => void;

  @Input() placeholder = '';

  @Input() autoFocus = false;

  @Input() isDisabled!: boolean;

  @Input() inputType!: boolean;

  @Input() edit!: boolean;

  @ViewChild('input', { static: false }) input!: ElementRef;

  ngAfterViewInit() {
    if (this.autoFocus) {
      this.onFocus();
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisableState(status: boolean) {
    this.isDisabled = status;
  }

  onInput(value: any) {
    if (this.onChange) {
      this.onChange(value.target.value);
    }
  }

  onTouched(value: any) {
    if (this.onTouch) {
      this.onTouch(value);
    }
  }

  onFocus() {
    //Normal Focus Method
    this.input.nativeElement.focus();

    // Another Method for set Focus
    //  this.input.nativeElement.select();
  }
}
