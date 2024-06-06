export enum TelluricMagneticFieldDifferenceEnum {
  MuchWeaker = 'MuchWeaker',
  Weaker = 'Weaker',
  Stronger = 'Stronger',
  MuchStronger = 'MuchStronger',
}
export type TelluricMagneticFieldDifference = keyof typeof TelluricMagneticFieldDifferenceEnum | keyof TelluricMagneticFieldDifferenceEnum;
