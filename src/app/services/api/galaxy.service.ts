import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Galaxy, GalaxyDTO } from '../../models/galaxy';
import { convertGalaxyFromDTO } from '../../utils/dto-conversion/galaxy-dto-conversion';
import { SettingsService } from '../settings.service';

@Injectable({
  providedIn: 'root',
})
export class GalaxyApiService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService,
  ) {}

  loadGalaxy(): Observable<Galaxy> {
    return this.http
      .post<GalaxyDTO>('/galaxy', this.settingsService.settings, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(map((dto) => convertGalaxyFromDTO(dto)));
  }
}
