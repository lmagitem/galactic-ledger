import { CelestialBodyCoreHeat } from './celestial-body-core-heat';
import { CelestialBodySpecialTrait } from './celestial-body-special-trait';
import { CelestialBodyWorldType } from './celestial-body-world-type';
import { MagneticFieldStrength } from './magnetic-field-strength';
import { TelluricBodyComposition } from './telluric-body-composition';
import { WorldClimateType } from './world-climate-type';
import { WorldTemperatureCategory } from './world-temperature-category';

export interface TelluricBodyDetails {
  readonly modelType: 'TelluricBodyDetails';
  /// The main composition of this world.
  bodyType: TelluricBodyComposition;
  /// The type of this world.
  worldType: CelestialBodyWorldType;
  /// What are the pecularities of this telluric body.
  specialTraits: Array<CelestialBodySpecialTrait>;
  /// The degree of heat this body's core still has.
  coreHeat: CelestialBodyCoreHeat;
  /// The strength of this object's magnetic field.
  magneticField: MagneticFieldStrength;
  /// This body's atmospheric pressure, in atm, with 1 atm being equal to the average sea-level air pressure on Earth.
  atmosphericPressure: number;
  /// An indication of the levels of volcanism in this world, from 0 to 100 (check `get_volcanism_level` to know what the numbers correspond to).
  volcanism: number;
  /// An indication of the levels of tectonic activity in this world, from 0 to 100 (check `get_tectonics_level` to know what the numbers correspond to).
  tectonicActivity: number;
  /// Percentage of this world that is covered by some kind of liquid.
  hydrosphere: number;
  /// Percentage of this world's oceans that is covered by some kind of ice.
  iceOverWater: number;
  /// Percentage of land on this world that is in the open, as in not recovered by water or ice.
  landAreaPercentage: number;
  /// Percentage of this world's lands that is covered by some kind of ice.
  iceOverLand: number;
  /// An indication of the levels of average relative humidity in this world.
  humidity: number;
  /// A descriptive name for the world’s over-all surface temperature category.
  temperatureCategory: WorldTemperatureCategory;
  /// A descriptive name for the world’s over-all climate.
  climate: WorldClimateType;
}

export interface TelluricBodyDetailsDTO {
  /// The main composition of this world.
  body_type: TelluricBodyComposition;
  /// The type of this world.
  world_type: CelestialBodyWorldType;
  /// What are the pecularities of this telluric body.
  special_traits: Array<CelestialBodySpecialTrait>;
  /// The degree of heat this body's core still has.
  core_heat: CelestialBodyCoreHeat;
  /// The strength of this object's magnetic field.
  magnetic_field: MagneticFieldStrength;
  /// This body's atmospheric pressure, in atm, with 1 atm being equal to the average sea-level air pressure on Earth.
  atmospheric_pressure: number;
  /// Percentage of this world that is covered by some kind of liquid.
  hydrosphere: number;
  /// Percentage of this world's oceans that is covered by some kind of ice.
  ice_over_water: number;
  /// Percentage of land on this world that is in the open, as in not recovered by water or ice.
  land_area_percentage: number;
  /// Percentage of this world's lands that is covered by some kind of ice.
  ice_over_land: number;
  /// An indication of the levels of volcanism in this world, from 0 to 100 (check `get_volcanism_level` to know what the numbers correspond to).
  volcanism: number;
  /// An indication of the levels of tectonic activity in this world, from 0 to 100 (check `get_tectonics_level` to know what the numbers correspond to).
  tectonic_activity: number;
  /// An indication of the levels of average relative humidity in this world.
  humidity: number;
  /// A descriptive name for the world’s over-all surface temperature category.
  temperature_category: WorldTemperatureCategory;
  /// A descriptive name for the world’s over-all climate.
  climate: WorldClimateType;
}
