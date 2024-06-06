export enum TelluricRotationDifferenceEnum {
  Slow = 'Slow',
  Fast = 'Fast',
  Retrograde = 'Retrograde',
  /// The world rotates three times for every two orbits around its main body.
  Resonant = 'Resonant',
}
export type TelluricRotationDifference = keyof typeof TelluricRotationDifferenceEnum | keyof TelluricRotationDifferenceEnum;
