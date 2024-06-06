export enum ElementPresenceOccurrenceEnum {
  Absence = 'Absence',
  VeryLow = 'VeryLow',
  Low = 'Low',
  Normal = 'Normal',
  High = 'High',
  VeryHigh = 'VeryHigh',
  Omnipresence = 'Omnipresence',
}
export type ElementPresenceOccurrence = keyof typeof ElementPresenceOccurrenceEnum | keyof ElementPresenceOccurrenceEnum;
