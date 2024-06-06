import { CelestialBodySpecialTrait } from './celestial-body-special-trait';
import { CelestialBodyWorldType } from './celestial-body-world-type';

export interface IcyBodyDetails {
  readonly modelType: 'IcyBodyDetails';
  /// The type of this world.
  worldType: CelestialBodyWorldType;
  /// What are the pecularities of this icy body.
  specialTraits: Array<CelestialBodySpecialTrait>;
}

export interface IcyBodyDetailsDTO {
  /// The type of this world.
  world_type: CelestialBodyWorldType;
  /// What are the pecularities of this icy body.
  special_traits: Array<CelestialBodySpecialTrait>;
}
