import { Orbit } from '../models/orbit';
import { toSignificantDecimals } from './math';
import { addSpacesToPascalCase } from './string';

export const formatOrbitDetails = (orbit: Orbit | undefined): string => {
  if (orbit === undefined) return 'Undefined orbit';
  let result = `<div><h4 class="subtitle">⇒ Orbit (${addSpacesToPascalCase(String(orbit.zone))})</h4><div class="astronomical-object-details">`;
  const averageDistance = toSignificantDecimals(orbit.averageDistance);
  const averageDistanceFromSystemCenter = toSignificantDecimals(orbit.averageDistanceFromSystemCenter);
  const eccentricity = toSignificantDecimals(orbit.eccentricity);
  const inclination = toSignificantDecimals(orbit.inclination);
  const tilt = toSignificantDecimals(orbit.axialTilt);
  const orbitalPeriod = toSignificantDecimals(orbit.orbitalPeriod);
  const rotation = toSignificantDecimals(orbit.rotation);
  const dayLength = toSignificantDecimals(orbit.dayLength);

  if (averageDistance === '0.0' && averageDistanceFromSystemCenter === averageDistance) {
    result += '<div>Center of the system.</div>';
  } else {
    result += `<div>Orbit from primary: ${eccentricity !== '0.0' ? 'average of ' : ''}${averageDistance} AU</div>`;
    if (eccentricity !== '0.0') result += `<div>Perigee: ${toSignificantDecimals(orbit.minSeparation)} AU</div>`;
    if (eccentricity !== '0.0') result += `<div>Apogee: ${toSignificantDecimals(orbit.maxSeparation)} AU</div>`;
    if (averageDistance !== averageDistanceFromSystemCenter)
      result += `<div>Orbit from system center:  ${eccentricity !== '0.0' ? 'average of ' : ''}${averageDistanceFromSystemCenter} AU</div>`;
    if (eccentricity !== '0.0') result += `<div>Eccentricity: ${eccentricity}</div>`;
    if (inclination !== '0.0') result += `<div>Inclination: ${inclination}</div>`;
    if (tilt !== '0.0') result += `<div>Axial tilt: ${tilt}°</div>`;
    if (orbitalPeriod !== '0.0') result += `<div>Cycle around parent: ${orbitalPeriod} terran days</div>`;
    if (rotation !== '0.0') result += `<div>Rotation around itself: ${rotation} terran days</div>`;
    if (dayLength !== '0.0') result += `<div>Apparent day length: ${dayLength} terran days</div>`;
  }
  result += `</div></div>`;
  return result;
};
