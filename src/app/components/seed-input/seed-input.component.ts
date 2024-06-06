import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-seed-input',
  templateUrl: './seed-input.component.html',
  styleUrl: './seed-input.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class SeedInputComponent {
  set seed(seed: string) {
    this.settingService.settings.seed = seed;
    this.stateService.updateGalaxy();
    this.stateService.updateSystem();
  }
  get seed() {
    return this.settingService.settings.seed;
  }

  constructor(
    private settingService: SettingsService,
    private stateService: StateService,
  ) {}
}
