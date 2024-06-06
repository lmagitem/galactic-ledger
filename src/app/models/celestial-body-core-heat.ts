export enum CelestialBodyCoreHeatEnum {
  /// The core is largely inactive, leading to minimal geological activity, and often results
  /// in a lack of magnetic field and tectonic movement.
  FrozenCore = 'FrozenCore',
  /// The core retains some residual heat, providing limited geological and possibly volcanic
  /// activity, but with a weaker impact on the planet's magnetic field and surface.
  WarmCore = 'WarmCore',
  /// A significantly heated core driving robust geological processes, including volcanism and
  /// tectonics, often accompanied by a stronger magnetic field.
  ActiveCore = 'ActiveCore',
  /// The core is extremely hot, fueling vigorous geological activity, potentially including
  /// powerful volcanism and dynamic tectonics, and usually results in a strong magnetic field.
  IntenseCore = 'IntenseCore',
}
export type CelestialBodyCoreHeat = keyof typeof CelestialBodyCoreHeatEnum | keyof CelestialBodyCoreHeatEnum;
