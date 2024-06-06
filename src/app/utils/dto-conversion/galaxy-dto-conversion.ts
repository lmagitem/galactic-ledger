import hash from 'object-hash';
import { GalacticHexDTO, GalacticHex } from '../../models/galactic-hex';
import { GalacticMapDivisionLevelDTO, GalacticMapDivisionLevel } from '../../models/galactic-map-division-level';
import { GalaxyDTO, Galaxy } from '../../models/galaxy';
import { convertStarSystemFromDTO } from './star-system-dto-conversion';

export const convertGalaxyFromDTO = (dto: GalaxyDTO): Galaxy => {
  const result = {
    settings: hash.sha1(dto.settings),
    neighborhood: dto.neighborhood,
    index: dto.index,
    name: dto.name,
    age: dto.age,
    isDominant: dto.is_dominant,
    isMajor: dto.is_major,
    category: dto.category,
    subCategory: dto.sub_category,
    specialTraits: dto.special_traits,
    divisions: dto.divisions,
  } as unknown as Galaxy;

  result.divisionLevels = dto.division_levels.map((level) => convertGalacticDivisionLevelFromDTO(level));

  result.hexes = dto.hexes.map((hex) => convertGalacticHexFromDTO(hex));

  return result;
};

export const convertGalacticDivisionLevelFromDTO = (dto: GalacticMapDivisionLevelDTO): GalacticMapDivisionLevel => ({
  modelType: 'GalacticMapDivisionLevel',
  level: dto.level,
  xSubdivisions: dto.x_subdivisions,
  ySubdivisions: dto.y_subdivisions,
  zSubdivisions: dto.z_subdivisions,
});

export const convertGalacticHexFromDTO = (dto: GalacticHexDTO): GalacticHex => ({
  modelType: 'GalacticHex',
  index: dto.index,
  neighborhood: dto.neighborhood,
  contents: dto.contents.map((system) => convertStarSystemFromDTO(system)),
});
