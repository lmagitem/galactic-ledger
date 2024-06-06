export enum TelluricVolatileDensityDifferenceEnum {
  Poor = 'Poor',
  Rich = 'Rich',
}
export type TelluricVolatileDensityDifference =
  | keyof typeof TelluricVolatileDensityDifferenceEnum
  | keyof TelluricVolatileDensityDifferenceEnum;
