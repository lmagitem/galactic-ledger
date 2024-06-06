import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { isInteger } from '../../utils/math';

@Component({
  selector: 'app-coordinates-input',
  templateUrl: './coordinates-input.component.html',
  styleUrls: ['./coordinates-input.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class CoordinatesInputComponent {
  coordinates = this.settingService.coords;
  possibleAxis: Array<'x' | 'y' | 'z'> = ['x', 'y', 'z'];

  constructor(
    private settingService: SettingsService,
    private stateService: StateService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public updateSystem(event: any, axis: 'x' | 'y' | 'z'): void {
    const value = event.target.value;
    if (isInteger(value)) {
      this.coordinates[axis] = +value;
      this.stateService.updateSystem();
    }
  }

  public increment(axis: 'x' | 'y' | 'z') {
    this.coordinates[axis]++;
    this.stateService.updateSystem();
  }

  public decrement(axis: 'x' | 'y' | 'z') {
    this.coordinates[axis]--;
    this.stateService.updateSystem();
  }
}
