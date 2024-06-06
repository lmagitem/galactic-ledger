import { CelestialBodyComposition } from './celestial-body-composition';
import { GaseousBodyDetails, GaseousBodyDetailsDTO } from './gaseous-body-details';
import { IcyBodyDetails, IcyBodyDetailsDTO } from './icy-body-details';
import { TelluricBodyDetails, TelluricBodyDetailsDTO } from './telluric-body-details';

export interface CelestialBodyDetails {
  readonly modelType: 'CelestialBodyDetails';
  Telluric?: TelluricBodyDetails;
  Gaseous?: GaseousBodyDetails;
  Icy?: IcyBodyDetails;
  Cloud?: CelestialBodyComposition;
}

export interface CelestialBodyDetailsDTO {
  Telluric?: TelluricBodyDetailsDTO;
  Gaseous?: GaseousBodyDetailsDTO;
  Icy?: IcyBodyDetailsDTO;
  Cloud?: CelestialBodyComposition;
}
