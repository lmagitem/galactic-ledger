import { StellarNeighborhoodAge } from './stellar-neighborhood-age';

export interface StellarNeighborhood {
  readonly modelType: 'StellarNeighborhood';
  /// The age of this neighborhood.
  age: StellarNeighborhoodAge;
}
