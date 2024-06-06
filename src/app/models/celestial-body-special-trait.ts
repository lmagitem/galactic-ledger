import { ChemicalComponent } from './chemical-component';
import { TelluricAxialTiltDifference } from './telluric-axial-tilt-difference';
import { TelluricCoreDifference } from './telluric-core-difference';
import { TelluricGeologicActivity } from './telluric-geologic-activity';
import { TelluricMagneticFieldDifference } from './telluric-magnetic-field-difference';
import { TelluricRotationDifference } from './telluric-rotation-difference';
import { TelluricTerrainRelief } from './telluric-terrain-relief';
import { TelluricVolatileDensityDifference } from './telluric-volatile-density-difference';
import { TideLockTarget } from './tide-lock-target';

export interface CelestialBodySpecialTraitInterface {
  SpecificGeologicActivity?: TelluricGeologicActivity;
  SpecificTerrainRelief?: TelluricTerrainRelief;
  TideLocked?: TideLockTarget;
  UnusualVolatileDensity?: TelluricVolatileDensityDifference;
  UnusualMagneticField?: TelluricMagneticFieldDifference;
  UnusualAxialTilt?: TelluricAxialTiltDifference;
  UnusualRotation?: TelluricRotationDifference;
  UnusualCore?: TelluricCoreDifference;
  SubSurfaceOceans?: ChemicalComponent;
  Oceans?: ChemicalComponent;
  Lakes?: ChemicalComponent;
}
export enum CelestialBodySpecialTraitEnum {
  /// This body has the exact traits that one might expect for a member of its type and subtype.
  NoPeculiarity = 'NoPeculiarity',
  /// This Gas Giant was the first to arise from its star proto-planetary disk.
  ProtoGiant = 'ProtoGiant',
  RetrogradeOrbit = 'RetrogradeOrbit',
}
export type CelestialBodySpecialTrait =
  | keyof typeof CelestialBodySpecialTraitEnum
  | typeof CelestialBodySpecialTraitEnum
  | CelestialBodySpecialTraitInterface;
