import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


const STATE_VALUE: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitxhComponent),
  multi: true
}
@Component({
  selector: 'app-switxh',
  templateUrl: './switxh.component.html',
  styleUrls: ['./switxh.component.scss'],
  providers: [STATE_VALUE]
})
export class SwitxhComponent implements ControlValueAccessor{
  state = 'off'
  private onChange = (value: any) => {}
  setState(state: string) {
    this.state = state
    this.onChange(this.state)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(state: string): void {
    this.state = state
  }
}
