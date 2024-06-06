import {
  CelestialBodySpecialTrait,
  CelestialBodySpecialTraitEnum,
  CelestialBodySpecialTraitInterface,
} from '../models/celestial-body-special-trait';
import { TelluricCoreDifferenceEnum } from '../models/telluric-core-difference';
import { TelluricMagneticFieldDifferenceEnum } from '../models/telluric-magnetic-field-difference';
import { TelluricRotationDifferenceEnum } from '../models/telluric-rotation-difference';
import { TideLockTargetEnum } from '../models/tide-lock-target';
import { addSpacesToPascalCase } from './string';

export const formatTelluricSpecialTrait = (trait: CelestialBodySpecialTrait): string => {
  if ((trait as CelestialBodySpecialTraitInterface).SpecificGeologicActivity) {
    return `${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).SpecificGeologicActivity))}`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).SpecificTerrainRelief) {
    return `${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).SpecificTerrainRelief))}`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).TideLocked) {
    if ((trait as CelestialBodySpecialTraitInterface).TideLocked === TideLockTargetEnum.Orbited) return `Tide-Locked to orbited`;
    else return `Tide-Locked to main satellite`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).UnusualVolatileDensity) {
    return `Volatile ${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).UnusualVolatileDensity))}`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).UnusualMagneticField) {
    if ((trait as CelestialBodySpecialTraitInterface).UnusualMagneticField === TelluricMagneticFieldDifferenceEnum.MuchWeaker)
      return `Much Weaker Magnetic Field`;
    if ((trait as CelestialBodySpecialTraitInterface).UnusualMagneticField === TelluricMagneticFieldDifferenceEnum.Weaker)
      return `Weaker Magnetic Field`;
    if ((trait as CelestialBodySpecialTraitInterface).UnusualMagneticField === TelluricMagneticFieldDifferenceEnum.Stronger)
      return `Stronger Magnetic Field`;
    else return `Much Stronger Magnetic Field`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).UnusualAxialTilt) {
    return `${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).UnusualAxialTilt))} Axial Tilt`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).UnusualRotation) {
    if ((trait as CelestialBodySpecialTraitInterface).UnusualRotation === TelluricRotationDifferenceEnum.Slow) return `Slow Rotation`;
    if ((trait as CelestialBodySpecialTraitInterface).UnusualRotation === TelluricRotationDifferenceEnum.Fast) return `Fast Rotation`;
    if ((trait as CelestialBodySpecialTraitInterface).UnusualRotation === TelluricRotationDifferenceEnum.Retrograde)
      return `Retrograde Rotation`;
    else return `3:2 Spin-Orbit Resonance`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).UnusualCore) {
    if ((trait as CelestialBodySpecialTraitInterface).UnusualCore === TelluricCoreDifferenceEnum.Coreless) return `Coreless`;
    if ((trait as CelestialBodySpecialTraitInterface).UnusualCore === TelluricCoreDifferenceEnum.Smaller) return `Smaller Core`;
    else return `Larger Core`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).SubSurfaceOceans) {
    return `Sub-Surface ${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).SubSurfaceOceans))} Oceans`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).Oceans) {
    return `${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).Oceans))} Oceans`;
  }
  if ((trait as CelestialBodySpecialTraitInterface).Lakes) {
    return `${addSpacesToPascalCase(String((trait as CelestialBodySpecialTraitInterface).Lakes))} Lakes`;
  }
  if (trait === CelestialBodySpecialTraitEnum.ProtoGiant) {
    return `Proto-Giant`;
  }
  return addSpacesToPascalCase(String(trait));
};
