import { StarLuminosityClass, StarLuminosityClassEnum } from '../models/star-luminosity-class';
import { StarPeculiarity, StarPeculiarityInterface } from '../models/star-peculiarity';
import { StarSpectralType, StarSpectralTypeEnum } from '../models/star-spectral-type';
import { StellarEvolutionValue, StellarEvolution } from '../models/stellar-evolution';
import { smoothScaleValueLog } from './math';
import { addSpacesToPascalCase } from './string';

export const formatPopulation = (population: StellarEvolutionValue): string => {
  let result = '';

  switch (population) {
    case StellarEvolution.Paleodwarf:
      result = `Population III`;
      break;
    case StellarEvolution.Subdwarf:
      result = `Population II`;
      break;
    case StellarEvolution.Dwarf:
      result = `Early Population I`;
      break;
    case StellarEvolution.Superdwarf:
      result = `Late Population I`;
      break;
    case StellarEvolution.Hyperdwarf:
    default:
      result = `Population 0`;
      break;
  }

  return result;
};

export const formatSpectralType = (
  spectralType: StarSpectralType | undefined,
  luminosityClass: StarLuminosityClass | undefined,
): string => {
  let result = '';

  switch (spectralType) {
    case StarSpectralTypeEnum.WR:
      result = `Wolf-Rayet Star`;
      break;
    case StarSpectralTypeEnum.O:
    case StarSpectralTypeEnum.B:
      result = `${luminosityClass === StarLuminosityClassEnum.V ? 'Blue Star' : 'Blue ' + formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.A:
    case StarSpectralTypeEnum.F:
      result = `${luminosityClass === StarLuminosityClassEnum.V ? 'White Star' : 'White ' + formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.G:
      result = `Yellow ${formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.K:
      result = `Orange ${formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.M:
      result = `Red ${formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.L:
    case StarSpectralTypeEnum.T:
    case StarSpectralTypeEnum.Y:
      result = `Brown Dwarf`;
      break;
    case StarSpectralTypeEnum.DA:
    case StarSpectralTypeEnum.DB:
    case StarSpectralTypeEnum.DC:
    case StarSpectralTypeEnum.DO:
    case StarSpectralTypeEnum.DZ:
    case StarSpectralTypeEnum.DQ:
    case StarSpectralTypeEnum.DX:
      result = `White Dwarf`;
      break;
    case StarSpectralTypeEnum.XNS:
      result = `Neutron Star`;
      break;
    case StarSpectralTypeEnum.XBH:
      result = `Black Hole`;
      break;
    default:
      break;
  }

  return result;
};

export const formatLuminosityClass = (luminosityClass: StarLuminosityClass | undefined): string => {
  let result = '';

  switch (luminosityClass) {
    case StarLuminosityClassEnum.O:
      result = 'Hypergiant';
      break;
    case StarLuminosityClassEnum.Ia:
    case StarLuminosityClassEnum.Ib:
      result = 'Supergiant';
      break;
    case StarLuminosityClassEnum.II:
    case StarLuminosityClassEnum.III:
      result = 'Giant';
      break;
    case StarLuminosityClassEnum.IV:
      result = 'Subgiant';
      break;
    case StarLuminosityClassEnum.V:
      result = 'Dwarf';
      break;
    case StarLuminosityClassEnum.VI:
      result = 'Subdwarf';
      break;
    default:
      break;
  }

  return result;
};

export const formatSpectralShortHand = (
  spectralType: StarSpectralType,
  subType: number | null,
  luminosityClass: StarLuminosityClass,
): string => `${spectralType}${subType !== null ? subType : ''} ${luminosityClass}`;

export const calculateStarDisplaySize = (radius: number): number => {
  const minVal = 0.05;
  const maxVal = 500;
  const minLogVal = 1;
  const maxLogVal = 20;
  return smoothScaleValueLog(radius, minVal, maxVal, minLogVal, maxLogVal);
};

export const calculateStarRadiusForGraph = (radius: number, maxVal: number): number => {
  const minVal = 1.16136118908e-5;
  const newMin = 2;
  return smoothScaleValueLog(radius, minVal, maxVal, newMin, maxVal);
};

export const formatStarSpecialTrait = (trait: StarPeculiarity): string => {
  if ((trait as StarPeculiarityInterface).VariableStar) {
    return `Variable Star (${addSpacesToPascalCase(String((trait as StarPeculiarityInterface).VariableStar))} Interval)`;
  }
  if ((trait as StarPeculiarityInterface).UnusualMetallicity) {
    return `${addSpacesToPascalCase(String((trait as StarPeculiarityInterface).UnusualMetallicity))} Metallicity`;
  }
  if ((trait as StarPeculiarityInterface).RotationAnomaly) {
    return `${addSpacesToPascalCase(String((trait as StarPeculiarityInterface).RotationAnomaly))} Rotation Speed`;
  }
  if ((trait as StarPeculiarityInterface).AgeDifference) {
    return `${addSpacesToPascalCase(String((trait as StarPeculiarityInterface).AgeDifference))} Star`;
  }
  if ((trait as StarPeculiarityInterface).UnusualElementPresence) {
    return `${addSpacesToPascalCase(String((trait as StarPeculiarityInterface).UnusualElementPresence?.[0]))} ${addSpacesToPascalCase(String((trait as StarPeculiarityInterface).UnusualElementPresence?.[1]))}`;
  }
  return addSpacesToPascalCase(String(trait));
};
