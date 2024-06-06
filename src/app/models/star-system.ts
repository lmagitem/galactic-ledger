import { OrbitalPoint, OrbitalPointDTO } from './orbital-point';
import { Star } from './star';
import { SystemPeculiarity } from './system-peculiarity';

export interface StarSystem {
  readonly modelType: 'StarSystem';
  name: string;
  center: OrbitalPoint;
  mainStar: Star;
  allObjects: OrbitalPoint[];
  specialTraits: SystemPeculiarity[];
}

export interface StarSystemDTO {
  name: string;
  center_id: number;
  main_star_id: number;
  all_objects: OrbitalPointDTO[];
  special_traits: SystemPeculiarity[];
}
