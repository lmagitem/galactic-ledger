import { Injectable } from '@angular/core';
import { GenerationSettings, defaultSettings } from '../models/settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public settings: GenerationSettings = defaultSettings;
  public coords = { x: 0, y: 0, z: 0 };
}
