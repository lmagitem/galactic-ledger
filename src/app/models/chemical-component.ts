export enum ChemicalComponentEnum {
  Hydrogen = 'Hydrogen',
  Helium = 'Helium',
  Carbon = 'Carbon',
  Nitrogen = 'Nitrogen',
  Oxygen = 'Oxygen',
  Silicon = 'Silicon',
  Magnesium = 'Magnesium',
  Iron = 'Iron',
  Sulfur = 'Sulfur',
  Sodium = 'Sodium',
  Potassium = 'Potassium',
  Calcium = 'Calcium',
  Aluminum = 'Aluminum',
  Phosphorus = 'Phosphorus',
  Chlorine = 'Chlorine',
  Argon = 'Argon',
  Titanium = 'Titanium',
  Chromium = 'Chromium',
  Manganese = 'Manganese',
  Nickel = 'Nickel',
  Water = 'Water',
  CarbonMonoxide = 'CarbonMonoxide',
  CarbonDioxide = 'CarbonDioxide',
  Methane = 'Methane',
  Ammonia = 'Ammonia',
  HydrogenSulfide = 'HydrogenSulfide',
  SulfurDioxide = 'SulfurDioxide',
  Hydroxyl = 'Hydroxyl',
  NitricOxide = 'NitricOxide',
  NitrogenDioxide = 'NitrogenDioxide',
  Formaldehyde = 'Formaldehyde',
  Methanol = 'Methanol',
  Ethylene = 'Ethylene',
  Ethane = 'Ethane',
  Acetylene = 'Acetylene',
  Benzene = 'Benzene',
  Acetonitrile = 'Acetonitrile',
  Methylamine = 'Methylamine',
  HydrogenCyanide = 'HydrogenCyanide',
  Glycine = 'Glycine',
  Silicates = 'Silicates',
  PolycyclicAromaticHydrocarbons = 'PolycyclicAromaticHydrocarbons',
}
export type ChemicalComponent = keyof typeof ChemicalComponentEnum | keyof ChemicalComponentEnum;
