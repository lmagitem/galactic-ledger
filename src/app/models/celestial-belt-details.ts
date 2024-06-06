import { CelestialBeltType } from './celestial-belt-type';

export interface CelestialBeltDetails {
  readonly modelType: 'CelestialBeltDetails';
  /// What kind of belt it is
  composition: CelestialBeltType;
}

export interface CelestialBeltDetailsDTO {
  /// What kind of belt it is
  composition: CelestialBeltType;
}
