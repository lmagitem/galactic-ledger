export enum MagneticFieldStrengthEnum {
  /// No magnetic field (0 Gauss), leading to increased surface radiation and faster atmospheric
  /// loss. Potentially more hostile to life.
  None = 'None',
  /// Weak magnetic field (0.1 - 0.3 Gauss, similar to Mars), offering minimal protection against
  /// solar wind and some atmospheric erosion. Limited shielding from cosmic radiation.
  Weak = 'Weak',
  /// Moderate magnetic field (0.3 - 1 Gauss, similar to the Moon or Mercury), providing moderate
  /// protection and can deflect some solar wind. May sustain a thin atmosphere with reduced
  /// atmospheric erosion.
  Moderate = 'Moderate',
  /// Strong magnetic field (1 - 100 Gauss, similar to Earth), ensuring strong protection against
  /// solar and cosmic radiation. Supports preservation of atmosphere and potential for complex life.
  Strong = 'Strong',
  /// Very strong magnetic field (100 - 10,000 Gauss, similar to Gas Giants), providing extremely
  /// effective atmospheric retention and strong auroras. Can create radiation belts that might be
  /// hazardous for life or technology.
  VeryStrong = 'VeryStrong',
  /// Extremely strong magnetic field (>10,000 Gauss, akin to Neutron Stars and Magnetars), found
  /// in exotic astrophysical objects. Likely uninhabitable due to extreme phenomena and strong
  /// radiation emissions.
  Extreme = 'Extreme',
}
export type MagneticFieldStrength = keyof typeof MagneticFieldStrengthEnum | keyof MagneticFieldStrengthEnum;
