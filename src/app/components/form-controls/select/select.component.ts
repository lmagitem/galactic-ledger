import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SelectComponent {
  @Input() control: FormControl | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() options?: { label: string; value: any }[];
}
