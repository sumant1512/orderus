import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchDropdownComponent),
      multi: true,
    },
  ],
})
export class SearchDropdownComponent implements ControlValueAccessor {
  list = [];
  temp_list = [];
  keyword = '';
  _label: any;
  _uid: any;

  @Output() afterChange = new EventEmitter<any>();
  @ViewChild('input', { static: false }) input!: ElementRef;
  @Input('items') set items(value: any) {
    this.list = value;
    this.temp_list = value;
  }
  @Input('label') label: any;
  @Input('inputLabel') inputLabel!: string;
  @Input('uid') uid: any;
  @Input('isDisabled') isDisabled: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};
  value: any = 'Select';
  shown = false;

  constructor(private ele: ElementRef) {}

  ngOnChanges() {
    this._label =
      typeof this.label !== 'undefined' && this.label !== ''
        ? this.label
        : 'name';
    this._uid =
      typeof this.uid !== 'undefined' && this.uid !== '' ? this.uid : 'id';
  }

  writeValue(value: any) {
    if (value) {
      this.temp_list.map((x) => {
        if (x[this._uid] == value) {
          this.value = this.getSelectedString(x);
        }
      });
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  updateChanges() {
    console.log(this.value);
  }

  search(e: string): void {
    const val = e.toLowerCase();
    const temp = this.temp_list?.filter((x: any) => {
      if (this.getSelectedString(x).toLowerCase().indexOf(val) !== -1 || !val) {
        return x;
      } else {
        return null;
      }
    });
    this.list = temp;
  }

  getSelectedString(x: any): string {
    let colorFullDetails = '';
    this._label.forEach((label: string, i: number) => {
      colorFullDetails += x[label];
      colorFullDetails += i + 1 !== this._label?.length ? ',' : '';
    });
    return colorFullDetails;
  }

  select(item: any) {
    this.onChange(item[this._uid]);
    this.value = this.getSelectedString(item);
    this.shown = false;
    this.afterChange.emit(item);
  }

  show() {
    if (!this.isDisabled) {
      this.shown = this.shown ? false : true;
      setTimeout(() => {
        this.input.nativeElement.focus();
      }, 200);
    }
  }

  @HostListener('document:click', ['$event']) onClick(e: any) {
    if (!this.ele.nativeElement.contains(e.target)) {
      this.shown = false;
    }
  }
}
