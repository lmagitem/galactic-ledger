import { AstronomicalObjectDTO, AstronomicalObjectType } from './astronomical-object';
import { Orbit, OrbitDTO } from './orbit';

export interface OrbitalPoint {
  readonly modelType: 'OrbitalPoint' | 'Star' | 'CelestialBody' | 'CelestialDisk';
  id: number;
  depth: number;
  ownOrbit: Orbit;
  orbits: Orbit[];
  type: AstronomicalObjectType;
}

export interface OrbitalPointDTO {
  id: number;
  own_orbit: OrbitDTO | null;
  orbits: OrbitDTO[];
  object: AstronomicalObjectDTO;
}
