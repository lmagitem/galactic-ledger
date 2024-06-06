export enum TelluricTerrainReliefEnum {
  FlatTerrain = 'FlatTerrain',
  VariedTerrain = 'VariedTerrain',
  /// This planet has an equatorial ridge that follows its equator almost perfectly,
  /// either in its entirety or spanning more than half of the length of the equator.
  EquatorialRidge = 'EquatorialRidge',
}
export type TelluricTerrainRelief = keyof typeof TelluricTerrainReliefEnum | keyof TelluricTerrainReliefEnum;
