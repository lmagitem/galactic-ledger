import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StarSystem, StarSystemDTO } from '../../models/star-system';
import { convertStarSystemFromDTO } from '../../utils/dto-conversion/star-system-dto-conversion';
import { SettingsService } from '../settings.service';

@Injectable({
  providedIn: 'root',
})
export class StarSystemApiService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService,
  ) {}

  loadStarSystem(): Observable<StarSystem> {
    const payload = {
      settings: this.settingsService.settings,
      x: this.settingsService.coords.x,
      y: this.settingsService.coords.y,
      z: this.settingsService.coords.z,
    };

    return this.http
      .post<StarSystemDTO>('/system', payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(map((dto) => convertStarSystemFromDTO(dto)));
  }
}
