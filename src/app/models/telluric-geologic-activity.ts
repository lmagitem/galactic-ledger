export enum TelluricGeologicActivityEnum {
  GeologicallyDead = 'GeologicallyDead',
  GeologicallyExtinct = 'GeologicallyExtinct',
  GeologicallyActive = 'GeologicallyActive',
}
export type TelluricGeologicActivity = keyof typeof TelluricGeologicActivityEnum | keyof TelluricGeologicActivityEnum;
