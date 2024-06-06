import { CelestialBodySpecialTrait } from './celestial-body-special-trait';

export interface GaseousBodyDetails {
  readonly modelType: 'GaseousBodyDetails';
  /// What are the pecularities of this gaseous body.
  specialTraits: Array<CelestialBodySpecialTrait>;
}

export interface GaseousBodyDetailsDTO {
  /// What are the pecularities of this gaseous body.
  special_traits: Array<CelestialBodySpecialTrait>;
}
