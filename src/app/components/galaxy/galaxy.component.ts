import { Component } from '@angular/core';
import { Galaxy } from '../../models/galaxy';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state.service';
import { AsyncPipe } from '@angular/common';
import { StarSystem } from '../../models/star-system';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.css',
  standalone: true,
  imports: [AsyncPipe],
})
export class GalaxyComponent {
  public galaxy: Observable<Galaxy | undefined> = this.stateService.galaxy.asObservable();
  public system: Observable<StarSystem | undefined> = this.stateService.system.asObservable();

  constructor(private stateService: StateService) {}

  getGalaxyLabel = (galaxy?: Galaxy | null): string => {
    if (!galaxy) return 'Galaxy data not loaded';
    let w = 0;
    let h = 0;
    let d = 0;
    if (!!galaxy.category.Elliptical || !!galaxy.category.DominantElliptical) {
      w = (galaxy.category.Elliptical || galaxy.category.DominantElliptical || 0) * 2;
      h = (galaxy.category.Elliptical || galaxy.category.DominantElliptical || 0) * 2;
      d = (galaxy.category.Elliptical || galaxy.category.DominantElliptical || 0) * 2;
    } else if (!!galaxy.category.Spiral || !!galaxy.category.Lenticular) {
      w =
        (!!galaxy.category.Spiral && galaxy.category.Spiral.length > 0
          ? galaxy.category.Spiral[0]
          : !!galaxy.category.Lenticular && galaxy.category.Lenticular.length > 0
            ? galaxy.category.Lenticular[0]
            : 0) * 2;
      h =
        (!!galaxy.category.Spiral && galaxy.category.Spiral.length > 0
          ? galaxy.category.Spiral[0]
          : !!galaxy.category.Lenticular && galaxy.category.Lenticular.length > 0
            ? galaxy.category.Lenticular[0]
            : 0) * 2;
      d =
        !!galaxy.category.Spiral && galaxy.category.Spiral.length > 1
          ? galaxy.category.Spiral[1]
          : !!galaxy.category.Lenticular && galaxy.category.Lenticular.length > 1
            ? galaxy.category.Lenticular[1]
            : 0;
    } else {
      w =
        !!galaxy.category.Intergalactic && galaxy.category.Intergalactic.length > 0
          ? galaxy.category.Intergalactic[0]
          : !!galaxy.category.Irregular && galaxy.category.Irregular.length > 0
            ? galaxy.category.Irregular[0]
            : !!galaxy.category.Intracluster && galaxy.category.Intracluster.length > 0
              ? galaxy.category.Intracluster[0]
              : 0;
      h =
        !!galaxy.category.Intergalactic && galaxy.category.Intergalactic.length > 1
          ? galaxy.category.Intergalactic[1]
          : !!galaxy.category.Irregular && galaxy.category.Irregular.length > 1
            ? galaxy.category.Irregular[1]
            : !!galaxy.category.Intracluster && galaxy.category.Intracluster.length > 1
              ? galaxy.category.Intracluster[1]
              : 0;
      d =
        !!galaxy.category.Intergalactic && galaxy.category.Intergalactic.length > 2
          ? galaxy.category.Intergalactic[2]
          : !!galaxy.category.Irregular && galaxy.category.Irregular.length > 2
            ? galaxy.category.Irregular[2]
            : !!galaxy.category.Intracluster && galaxy.category.Intracluster.length > 2
              ? galaxy.category.Intracluster[2]
              : 0;
    }

    return `In a ${w}×${h}×${d} parsecs ${
      galaxy.isDominant ? 'Dominant' : galaxy.isMajor ? 'Major' : 'Minor'
    } ${(galaxy.subCategory as string).replace(/([A-Z])/g, ' $1').trim()} Galaxy`;
  };
}
