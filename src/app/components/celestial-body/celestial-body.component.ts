import { Component, Input, OnChanges } from '@angular/core';
import { OrbitalPoint } from '../../models/orbital-point';
import { formatObjectDetails, formatOrbitalPointName } from '../../utils/orbital-point-display';
import { StarSystem } from '../../models/star-system';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { formatOrbitDetails } from '../../utils/orbit-display';
import { getStarCSSClass, getZoneCSSClass } from '../../utils/color';
import { ZoneType, ZoneTypeValue } from '../../models/zone-type';
import { Star } from '../../models/star';

@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class CelestialBodyComponent implements OnChanges {
  @Input() orbitalPoint?: OrbitalPoint;
  @Input() system?: StarSystem;
  private _openChildren?: boolean;
  @Input() set openChildren(force: boolean | undefined) {
    this._openChildren = force;
    if (force !== undefined) this.showChildren = force;
  }
  get openChildren() {
    return this._openChildren;
  }
  private _openDetails?: boolean;
  @Input() set openDetails(force: boolean | undefined) {
    this._openDetails = force;
    if (force !== undefined) this.showDetails = force;
  }
  get openDetails() {
    return this._openDetails;
  }
  public showChildren: boolean = false;
  public showDetails: boolean = true;
  private label = '';
  private details = '';

  public toggleShowChildren(): void {
    this.showChildren = !this.showChildren;
  }

  public toggleShowDetails(): void {
    this.showDetails = !this.showDetails;
  }

  public ngOnChanges() {
    this.label = '';
    this.details = '';
  }

  public getLabel(): string {
    if (this.label === '') {
      this.label = formatOrbitalPointName(this.orbitalPoint, this.system);
    }
    return this.label;
  }

  public getDetails(): string {
    if (this.details === '') {
      this.details = formatOrbitDetails(this.orbitalPoint?.ownOrbit);
      this.details += formatObjectDetails(this.orbitalPoint);
    }
    return this.details;
  }

  public getZoneCSSClass(zone?: ZoneTypeValue, object?: OrbitalPoint): string {
    if (object?.modelType === 'Star') return getStarCSSClass((object as Star).spectralType);
    return getZoneCSSClass(zone as ZoneType);
  }
}
