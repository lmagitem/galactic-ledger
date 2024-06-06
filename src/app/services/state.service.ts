import { Injectable } from '@angular/core';
import { Galaxy } from '../models/galaxy';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { StarSystem } from '../models/star-system';
import { StarSystemApiService } from './api/star-system.service';
import { GalaxyApiService } from './api/galaxy.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public galaxy: BehaviorSubject<Galaxy | undefined> = new BehaviorSubject(undefined as Galaxy | undefined);
  public system: BehaviorSubject<StarSystem | undefined> = new BehaviorSubject(undefined as StarSystem | undefined);
  public openChildren: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public openDetails: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private galaxyApiService: GalaxyApiService,
    private starSystemApiService: StarSystemApiService,
  ) {
    this.updateGalaxy();
    this.updateSystem();
  }

  public async updateGalaxy(): Promise<void> {
    this.galaxy.next(await firstValueFrom(this.galaxyApiService.loadGalaxy()));
  }

  public async updateSystem(): Promise<void> {
    this.system.next(await firstValueFrom(this.starSystemApiService.loadStarSystem()));
  }
}
