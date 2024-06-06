export enum WorldTemperatureCategoryEnum {
  /// Temperature below 244 K (-29.15°C).
  Frozen = 'Frozen',
  /// Temperature between 244 K (-29.15°C) and 255 K (-18.15°C).
  VeryCold = 'VeryCold',
  /// Temperature between 255 K (-18.15°C) and 266 K (-7.15°C).
  Cold = 'Cold',
  /// Temperature between 266 K (-7.15°C) and 278 K (4.85°C).
  Chilly = 'Chilly',
  /// Temperature between 278 K (4.85°C) and 289 K (15.85°C).
  Cool = 'Cool',
  /// Temperature between 289 K (15.85°C) and 300 K (26.85°C).
  Temperate = 'Temperate',
  /// Temperature between 300 K (26.85°C) and 311 K (37.85°C).
  Warm = 'Warm',
  /// Temperature between 311 K (37.85°C) and 322 K (48.85°C).
  Hot = 'Hot',
  /// Temperature between 322 K (48.85°C) and 333 K (59.85°C).
  VeryHot = 'VeryHot',
  /// Temperature between 333 K (59.85°C) and 344 K (70.85°C).
  Scorching = 'Scorching',
  /// Temperature above 344 K (70.85°C).
  Infernal = 'Infernal',
}
export type WorldTemperatureCategory = keyof typeof WorldTemperatureCategoryEnum | keyof WorldTemperatureCategoryEnum;
