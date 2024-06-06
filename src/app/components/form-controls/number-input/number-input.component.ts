import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isInteger } from '../../../utils/math';

@Component({
  selector: 'app-numberinput',
  templateUrl: './number-input.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NumberInputComponent {
  @Input() control: FormControl | null = null;

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value === '') {
      this.control?.setValue(0);
      return;
    }

    if (isInteger(value)) {
      this.control?.setValue(parseInt(value, 10));
    } else {
      input.value = this.control?.value ?? '';
    }
  }
}
