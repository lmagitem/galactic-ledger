import { OrbitalPoint } from './orbital-point';
import { ZoneTypeValue } from './zone-type';

export interface Orbit {
  readonly modelType: 'Orbit';
  primaryBody: OrbitalPoint | null;
  zone: ZoneTypeValue;
  averageDistance: number;
  averageDistanceFromSystemCenter: number;
  eccentricity: number;
  minSeparation: number;
  maxSeparation: number;
  axialTilt: number;
  inclination: number;
  orbitalPeriod: number;
  rotation: number;
  dayLength: number;
}

export interface OrbitDTO {
  id?: number;
  primary_body_id: number;
  satellite_ids: number[];
  zone: ZoneTypeValue;
  average_distance: number;
  average_distance_from_system_center: number;
  min_separation: number;
  max_separation: number;
  axial_tilt: number;
  eccentricity: number;
  inclination: number;
  orbital_period: number;
  rotation: number;
  day_length: number;
}
