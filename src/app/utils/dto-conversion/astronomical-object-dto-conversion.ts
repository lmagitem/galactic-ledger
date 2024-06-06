import { AstronomicalObjectTypeEnum, AstronomicalObjectDTOEnum, AstronomicalObjectDTOInterface } from '../../models/astronomical-object';
import { CelestialBody, CelestialBodyDTO } from '../../models/celestial-body';
import { CelestialDisk, CelestialDiskDTO } from '../../models/celestial-disk';
import { OrbitDTO, Orbit } from '../../models/orbit';
import { OrbitalPointDTO, OrbitalPoint } from '../../models/orbital-point';
import { Star, StarDTO } from '../../models/star';
import { ZoneType } from '../../models/zone-type';
import { fillResultAsCelestialBody } from './celestial-body-dto-conversion';
import { fillResultAsCelestialDisk } from './celestial-disk-dto-conversion';
import { fillResultAsStar } from './star-dto-conversion';

export const convertOrbitalPointWithoutReferencesFromDTO = (dto: OrbitalPointDTO): OrbitalPoint => {
  let result = {
    id: dto.id,
    depth: 0,
    ownOrbit: convertOrbit(dto.own_orbit),
    orbits: dto.orbits.map((o) => convertOrbit(o)),
    type: AstronomicalObjectTypeEnum.Void,
  } as OrbitalPoint;

  const ao = dto.object;
  if (ao === AstronomicalObjectDTOEnum.Void) {
    result.type = AstronomicalObjectTypeEnum.Void;
  } else if ((ao as AstronomicalObjectDTOInterface).Star !== undefined) {
    result = fillResultAsStar({ ...result, modelType: 'Star' } as Star, (ao as AstronomicalObjectDTOInterface).Star as StarDTO);
  } else if (
    (ao as AstronomicalObjectDTOInterface).GaseousBody !== undefined ||
    (ao as AstronomicalObjectDTOInterface).TelluricBody !== undefined ||
    (ao as AstronomicalObjectDTOInterface).IcyBody !== undefined
  ) {
    const aoi = ao as AstronomicalObjectDTOInterface;
    result = fillResultAsCelestialBody(
      { ...result, modelType: 'CelestialBody' } as CelestialBody,
      (aoi.GaseousBody !== undefined
        ? aoi.GaseousBody
        : aoi.TelluricBody !== undefined
          ? aoi.TelluricBody
          : aoi.IcyBody) as CelestialBodyDTO,
    );
  } else if (
    (ao as AstronomicalObjectDTOInterface).GaseousDisk !== undefined ||
    (ao as AstronomicalObjectDTOInterface).TelluricDisk !== undefined ||
    (ao as AstronomicalObjectDTOInterface).IcyDisk !== undefined
  ) {
    const aoi = ao as AstronomicalObjectDTOInterface;
    console.log('I go here', dto, { ...result });
    result = fillResultAsCelestialDisk(
      { ...result, modelType: 'CelestialDisk' } as CelestialDisk,
      (aoi.GaseousDisk !== undefined
        ? aoi.GaseousDisk
        : aoi.TelluricDisk !== undefined
          ? aoi.TelluricDisk
          : aoi.IcyDisk) as CelestialDiskDTO,
    );
    console.log('then', { ...result });
  } else {
    throw new Error(`Should add a new case in my pseudo-match for ${ao}`);
  }

  return result;
};

export const convertOrbit = (orbit?: OrbitDTO | null) =>
  ({
    primaryBody: (orbit?.id !== undefined ? orbit.id : null) as OrbitalPoint | null,
    averageDistance: orbit?.average_distance || null,
    eccentricity: orbit?.eccentricity || 0.0,
    minSeparation: orbit?.min_separation || 0.0,
    maxSeparation: orbit?.max_separation || 0.0,
    averageDistanceFromSystemCenter: orbit?.average_distance_from_system_center ?? 0.0,
    inclination: orbit?.inclination ?? 0.0,
    axialTilt: orbit?.axial_tilt ?? 0.0,
    orbitalPeriod: orbit?.orbital_period ?? 0.0,
    zone: orbit?.zone ?? ZoneType.ForbiddenZone,
    rotation: orbit?.rotation ?? 0.0,
    dayLength: orbit?.day_length ?? 0.0,
  }) as Orbit;
