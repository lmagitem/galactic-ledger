import { Component } from '@angular/core';
import { StarSystem } from '../../models/star-system';
import { CelestialBodyComponent } from '../celestial-body/celestial-body.component';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-star-system',
  templateUrl: './star-system.component.html',
  styleUrls: ['./star-system.component.css'],
  standalone: true,
  imports: [CelestialBodyComponent, AsyncPipe],
})
export class StarSystemComponent {
  public system: Observable<StarSystem | undefined> = this.stateService.system.asObservable();
  public openChildren: Observable<boolean> = this.stateService.openChildren.asObservable();
  public openDetails: Observable<boolean> = this.stateService.openDetails.asObservable();

  constructor(private stateService: StateService) {}
}
