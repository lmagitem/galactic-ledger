export enum WorldClimateTypeEnum {
  Terrestrial = 'Terrestrial',
  MudBall = 'MudBall',
  Ocean = 'Ocean',
  Arctic = 'Arctic',
  Rainforest = 'Rainforest',
  Tropical = 'Tropical',
  Jungle = 'Jungle',
  Tundra = 'Tundra',
  Taiga = 'Taiga',
  Savanna = 'Savanna',
  Steppe = 'Steppe',
  Desert = 'Desert',
  Ribbon = 'Ribbon',
  Dead = 'Dead',
}
export type WorldClimateType = keyof typeof WorldClimateTypeEnum | keyof WorldClimateTypeEnum;
