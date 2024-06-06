/* eslint-disable no-case-declarations */
import { AstronomicalObjectTypeEnum } from '../models/astronomical-object';
import { CelestialBody } from '../models/celestial-body';
import { CelestialBodySpecialTraitInterface } from '../models/celestial-body-special-trait';
import { CelestialDisk } from '../models/celestial-disk';
import { CelestialDiskTypeEnum, CelestialDiskTypeInterface } from '../models/celestial-disk-type';
import { GaseousBodyDetails } from '../models/gaseous-body-details';
import { IcyBodyDetails } from '../models/icy-body-details';
import { OrbitalPoint } from '../models/orbital-point';
import { Star } from '../models/star';
import { StarSystem } from '../models/star-system';
import { TelluricBodyDetails } from '../models/telluric-body-details';
import { toSignificantDecimals } from './math';
import { formatPopulation, formatSpectralShortHand, formatSpectralType, formatStarSpecialTrait } from './star-display';
import { addSpacesToPascalCase } from './string';
import { formatTelluricSpecialTrait } from './telluric-body-display';
import { convertEarthMassToKilograms, convertEarthRadiiToKilometers, convertKelvinToCelsius, convertSolarMassToKilograms } from './units';

export const formatOrbitalPointName = (
  orbitalPoint: OrbitalPoint | undefined,
  system: StarSystem | undefined,
  recursive = true,
): string => {
  if (orbitalPoint === undefined || system === undefined) return '';
  const id = `<span class="id-font">[${orbitalPoint.id.toString().padStart(3, '0')}]</span> `;
  let type = `${orbitalPoint.type}`;

  if (orbitalPoint.type === AstronomicalObjectTypeEnum.Void) {
    if (orbitalPoint.ownOrbit.primaryBody === null) return `${id} Center of the "${system.name}" System - ${type}`;
    else if (orbitalPoint.orbits.length > 0)
      return recursive
        ? `${id} Barycentre ${orbitalPoint.id} - Orbited by ${orbitalPoint.orbits
            .filter((o) => o.primaryBody)
            .map((o) => `[${o.primaryBody?.id.toString().padStart(3, '0')}]`)
            .join(', ')} - ${type}`
        : `${id} Barycentre ${orbitalPoint.id} - ${type}`;
    else return `${id} Empty Space - ${type}`;
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.Star) {
    return getStarPointName(id, orbitalPoint as Star);
  } else if (
    orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousBody ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricBody ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.IcyBody
  ) {
    switch (orbitalPoint.type) {
      case 'TelluricBody':
        type = formatTelluricBodyName(orbitalPoint as CelestialBody);
        break;
      case 'GaseousBody':
        type = `Gas ${String((orbitalPoint as CelestialBody).size)}`;
        break;
      case 'IcyBody':
        type = `Ice ${String((orbitalPoint as CelestialBody).size)}`;
        break;
    }
    return `${id} "${(orbitalPoint as CelestialBody).name}" - ${type}`;
  } else if (
    orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousDisk ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricDisk ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.IcyDisk
  ) {
    const interfaceDetails = (orbitalPoint as CelestialDisk).details as CelestialDiskTypeInterface;
    const enumDetails = (orbitalPoint as CelestialDisk).details as CelestialDiskTypeEnum;
    if (interfaceDetails?.Belt) {
      type = `${String(interfaceDetails?.Belt?.composition)} Belt`;
    } else if (interfaceDetails?.Ring) {
      type = `${String(interfaceDetails?.Ring?.level)} ${String(interfaceDetails?.Ring?.composition)} Ring`;
    } else if (enumDetails === 'ProtoplanetaryDisk') {
      type = `Protoplanetary Disk`;
    } else if (enumDetails === 'Shell') {
      type = `Shell`;
    }
    return `${id} "${(orbitalPoint as CelestialDisk).name}" - ${type}`;
  } else {
    throw new Error(`Should add a new case in my pseudo-match for ${orbitalPoint}`);
  }
};

export const formatObjectDetails = (object: OrbitalPoint | undefined): string => {
  if (object === undefined) return 'Undefined object';
  if (object.type === 'Void') return '';
  let result = `<div><h4 class="subtitle">⇒ Object (${addSpacesToPascalCase(String(object.type))})</h4><div class="astronomical-object-details">`;

  switch (object.type) {
    case 'Star':
      const star = object as Star;
      result += `<div>Type: ${formatSpectralShortHand(star.spectralType, star.spectralTypeSubClass, star.luminosityClass)} (${formatSpectralType(star.spectralType, star.luminosityClass)})</div>`;
      result += `<div>Age: ${toSignificantDecimals(star.age)} billion years old</div>`;
      result += `<div>${formatPopulation(star.population)}</div>`;
      result += `<div>Mass: ${toSignificantDecimals(star.mass)} M☉ (${convertSolarMassToKilograms(star.mass).toPrecision(4)} kg)</div>`;
      result += `<div>Radius: ${toSignificantDecimals(star.radius)} R☉</div>`;
      result += `<div>Temperature: ${star.temperature} K (${convertKelvinToCelsius(star.temperature)}° C)</div>`;
      if (star.specialTraits.length > 0) {
        result += `<div>Special traits: ${star.specialTraits.map((t) => formatStarSpecialTrait(t)).join(', ')}</div>`;
      }
      break;
    case 'TelluricBody':
      result += addCelestialBodyLines(object);
      const rockyBody = (object as CelestialBody).details.Telluric as unknown as TelluricBodyDetails;
      result += `<div>Magnetic strength: ${addSpacesToPascalCase(String(rockyBody.magneticField))}</div>`;
      result += `<div>Core heat: ${addSpacesToPascalCase(String(rockyBody.coreHeat))}</div>`;
      result += `<div>Temperature type: ${addSpacesToPascalCase(String(rockyBody.temperatureCategory))}</div>`;
      result += formatVoclanismLevel(rockyBody.volcanism);
      result += `<div>Liquid coverage: ${toSignificantDecimals(rockyBody.hydrosphere)}%</div>`;
      result += `<div>Ice over water: ${toSignificantDecimals(rockyBody.iceOverWater)}%</div>`;
      result += formatTectonicActivity(rockyBody.tectonicActivity);
      result += `<div>Land coverage: ${toSignificantDecimals(rockyBody.landAreaPercentage)}%</div>`;
      result += `<div>Ice over land: ${toSignificantDecimals(rockyBody.iceOverLand)}%</div>`;
      result += `<div>Relative humidity: ${rockyBody.humidity > -0.01 ? toSignificantDecimals(rockyBody.humidity) + '%' : 'N/A'}</div>`;
      result += `<div>Atmospheric pressure: ${toSignificantDecimals(rockyBody.atmosphericPressure)} atm</div>`;
      if (rockyBody.specialTraits.length > 0) {
        result += `<div>Special traits: ${rockyBody.specialTraits.map((t) => formatTelluricSpecialTrait(t)).join(', ')}</div>`;
      }
      break;
    case 'IcyBody':
      result += addCelestialBodyLines(object);
      const icyBody = (object as CelestialBody).details.Icy as unknown as IcyBodyDetails;
      if (icyBody.specialTraits.length > 0) {
        result += `<div>Special traits: ${icyBody.specialTraits.map((t) => formatTelluricSpecialTrait(t)).join(', ')}</div>`;
      }
      break;
    case 'GaseousBody':
      result += addCelestialBodyLines(object);
      const gaseousBody = (object as CelestialBody).details.Gaseous as unknown as GaseousBodyDetails;
      if (gaseousBody.specialTraits.length > 0) {
        result += `<div>Special traits: ${gaseousBody.specialTraits.map((t) => formatTelluricSpecialTrait(t)).join(', ')}</div>`;
      }
      break;
    case 'TelluricDisk':
      break;
    case 'GaseousDisk':
      break;
    case 'IcyDisk':
      break;
    default:
      break;
  }

  result += `</div></div>`;
  return result;
};

function getStarPointName(id: string, star: Star): string {
  return `${id} "${star.name}" - ${formatSpectralType(star.spectralType, star.luminosityClass)} (${formatSpectralShortHand(star.spectralType, star.spectralTypeSubClass, star.luminosityClass)})`;
}

function formatVoclanismLevel(volcanism: number) {
  let level;
  if (volcanism <= 0.01) level = 'None';
  else if (volcanism <= 6) level = 'Light';
  else if (volcanism <= 25) level = 'Moderate';
  else if (volcanism <= 55) level = 'Heavy';
  else level = 'Extreme';
  return `<div>Volcanism: ${toSignificantDecimals(volcanism)}% (${level})</div>`;
}

function formatTectonicActivity(tectonicActivity: number) {
  let level;
  if (tectonicActivity <= 0.01) level = 'None';
  else if (tectonicActivity <= 16) level = 'Light';
  else if (tectonicActivity <= 35) level = 'Moderate';
  else if (tectonicActivity <= 55) level = 'Heavy';
  else level = 'Extreme';
  return `<div>Tectonic activity: ${toSignificantDecimals(tectonicActivity)}% (${level})</div>`;
}

function formatTelluricBodyName(orbitalPoint: CelestialBody) {
  const telluricDetails = orbitalPoint.details.Telluric as TelluricBodyDetails;
  let worldType = addSpacesToPascalCase(
    String(
      telluricDetails.worldType !== 'Terrestrial' && telluricDetails.worldType !== 'Ocean'
        ? telluricDetails.worldType
        : telluricDetails.climate,
    ),
  );
  worldType = worldType === 'Ice' ? 'Ice Ball' : worldType;
  let type = `${String(orbitalPoint.size)} ${addSpacesToPascalCase(String(telluricDetails?.temperatureCategory))} ${worldType} (${String(telluricDetails?.bodyType)})`;

  const planetDetails = getPlanetDetails(telluricDetails);
  if (planetDetails.length > 0) type += ` - ${planetDetails.join(', ')}`;

  return type;
}

function getPlanetDetails(telluricDetails: TelluricBodyDetails) {
  const details = [];

  if (telluricDetails.atmosphericPressure > 0) details.push(`Atmosphere (🌤)`);

  const lakes = telluricDetails?.specialTraits.find((t) => (t as CelestialBodySpecialTraitInterface).Lakes);
  const oceans = telluricDetails?.specialTraits.find((t) => (t as CelestialBodySpecialTraitInterface).Oceans);
  if (lakes || oceans) details.push(`${formatTelluricSpecialTrait((lakes ?? oceans)!)} (🌊)`);
  const subsurfaceOceans = telluricDetails?.specialTraits.find((t) => (t as CelestialBodySpecialTraitInterface).SubSurfaceOceans);
  if (subsurfaceOceans) details.push(`${formatTelluricSpecialTrait(subsurfaceOceans!)} (💧)`);

  return details;
}

function addCelestialBodyLines(object: OrbitalPoint) {
  let result = '';
  const body = object as CelestialBody;
  result += `<div>Mass: ${toSignificantDecimals(body.mass)} M⊕ (${convertEarthMassToKilograms(body.mass).toPrecision(4)} kg)</div>`;
  result += `<div>Radius: ${toSignificantDecimals(body.radius)} R⊕ (${toSignificantDecimals(convertEarthRadiiToKilometers(body.radius))} km)</div>`;
  result += `<div>Density: ${toSignificantDecimals(body.density)} g/cm³</div>`;
  result += `<div>Gravity : ${toSignificantDecimals(body.gravity)} g</div>`;
  result += `<div>Tidal heating: ${body.tidalHeating}/20</div>`;
  result += `<div>Average temperature: ${body.blackbodyTemperature} K (${toSignificantDecimals(convertKelvinToCelsius(body.blackbodyTemperature))}° C)</div>`;
  return result;
}
