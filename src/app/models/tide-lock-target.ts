export enum TideLockTargetEnum {
  /// The object is tide-locked to what it's orbiting
  Orbited = 'Orbited',
  /// The object is tide-locked to its primary satellite
  Satellite = 'Satellite',
}
export type TideLockTarget = keyof typeof TideLockTargetEnum | keyof TideLockTargetEnum;
