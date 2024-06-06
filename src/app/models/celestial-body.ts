import { CelestialBodyDetails, CelestialBodyDetailsDTO } from './celestial-body-details';
import { CelestialBodySize } from './celestial-body-size';
import { OrbitDTO } from './orbit';
import { OrbitalPoint } from './orbital-point';

export interface CelestialBody extends OrbitalPoint {
  readonly modelType: 'CelestialBody';
  /// This body's name.
  name: string;
  /// This body's mass, in Earth's masses.
  mass: number;
  /// This body's radius, in Earth's radii.
  radius: number;
  /// This body's density, in g/cm³.
  density: number;
  /// This body's surface gravity, in Gs.
  gravity: number;
  /// This body's blackbody temperature, in Kelvins.
  blackbodyTemperature: number;
  /// A measure of the tidal friction caused on this body by the resonance of its orbit with its neighbors orbits.
  tidalHeating: number;
  /// The size class in which this body falls.
  size: CelestialBodySize;
  /// Specific body details.
  details: CelestialBodyDetails;
}

export interface CelestialBodyDTO {
  /// Is this body a simple stub to be redesigned later?
  stub: boolean;
  /// This body's name.
  name: string;
  /// The body's own orbit, along which it revolves.
  orbit: OrbitDTO | null;
  /// The id of the orbital point this body inhabits.
  orbital_point_id: number;
  /// This body's mass, in Earth's masses.
  mass: number;
  /// This body's radius, in Earth's radii.
  radius: number;
  /// This body's density, in g/cm³.
  density: number;
  /// This body's surface gravity, in Gs.
  gravity: number;
  /// This body's blackbody temperature, in Kelvins.
  blackbody_temperature: number;
  /// A measure of the tidal friction caused on this body by the resonance of its orbit with its neighbors orbits.
  tidal_heating: number;
  /// The size class in which this body falls.
  size: CelestialBodySize;
  /// Specific body details.
  details: CelestialBodyDetailsDTO;
}
