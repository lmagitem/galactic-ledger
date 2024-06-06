import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, SettingsComponent, MainComponent],
})
export class AppComponent {}
