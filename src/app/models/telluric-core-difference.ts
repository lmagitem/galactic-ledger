export enum TelluricCoreDifferenceEnum {
  Coreless = 'Coreless',
  Smaller = 'Smaller',
  Larger = 'Larger',
}
export type TelluricCoreDifference = keyof typeof TelluricCoreDifferenceEnum | keyof TelluricCoreDifferenceEnum;
