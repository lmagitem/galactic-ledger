import { AstronomicalObjectTypeEnum } from '../../models/astronomical-object';
import { CelestialBody, CelestialBodyDTO } from '../../models/celestial-body';
import { CelestialBodyDetailsDTO, CelestialBodyDetails } from '../../models/celestial-body-details';
import { GaseousBodyDetails, GaseousBodyDetailsDTO } from '../../models/gaseous-body-details';
import { IcyBodyDetails, IcyBodyDetailsDTO } from '../../models/icy-body-details';
import { TelluricBodyDetails, TelluricBodyDetailsDTO } from '../../models/telluric-body-details';

export const fillResultAsCelestialBody = (body: CelestialBody, bodyDTO: CelestialBodyDTO): CelestialBody => {
  body.name = bodyDTO.name;
  body.mass = bodyDTO.mass;
  body.radius = bodyDTO.radius;
  body.density = bodyDTO.density;
  body.gravity = bodyDTO.gravity;
  body.blackbodyTemperature = bodyDTO.blackbody_temperature;
  body.size = bodyDTO.size;
  body.tidalHeating = bodyDTO.tidal_heating;
  body.details = convertDetails(bodyDTO.details);
  body.type =
    bodyDTO.details?.Icy !== undefined
      ? AstronomicalObjectTypeEnum.IcyBody
      : bodyDTO.details?.Telluric !== undefined
        ? AstronomicalObjectTypeEnum.TelluricBody
        : AstronomicalObjectTypeEnum.GaseousBody;

  return body;
};

export const convertDetails = (details: CelestialBodyDetailsDTO) =>
  ({
    modelType: 'CelestialBodyDetails',
    Telluric: convertTelluricDetails(details?.Telluric),
    Icy: convertIcyDetails(details?.Icy),
    Gaseous: convertGaseousDetails(details?.Gaseous),
    Cloud: details?.Cloud,
  }) as CelestialBodyDetails;

export const convertTelluricDetails = (details?: TelluricBodyDetailsDTO) =>
  details
    ? ({
        modelType: 'TelluricBodyDetails',
        specialTraits: details.special_traits,
        bodyType: details.body_type,
        worldType: details.world_type,
        atmosphericPressure: details.atmospheric_pressure,
        coreHeat: details.core_heat,
        hydrosphere: details.hydrosphere,
        iceOverLand: details.ice_over_land,
        landAreaPercentage: details.land_area_percentage,
        iceOverWater: details.ice_over_water,
        magneticField: details.magnetic_field,
        tectonicActivity: details.tectonic_activity,
        volcanism: details.volcanism,
        humidity: details.humidity,
        temperatureCategory: details.temperature_category,
        climate: details.climate,
      } as TelluricBodyDetails)
    : undefined;

export const convertIcyDetails = (details?: IcyBodyDetailsDTO) =>
  details
    ? ({
        modelType: 'IcyBodyDetails',
        worldType: details.world_type,
        specialTraits: details.special_traits,
      } as IcyBodyDetails)
    : undefined;

export const convertGaseousDetails = (details?: GaseousBodyDetailsDTO) =>
  details
    ? ({
        modelType: 'GaseousBodyDetails',
        specialTraits: details.special_traits,
      } as GaseousBodyDetails)
    : undefined;
