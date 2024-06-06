import { OrbitalPointDTO, OrbitalPoint } from '../../models/orbital-point';
import { Star } from '../../models/star';
import { StarSystemDTO, StarSystem } from '../../models/star-system';
import { convertOrbitalPointWithoutReferencesFromDTO } from './astronomical-object-dto-conversion';
import { updateDepth } from './star-dto-conversion';

export const convertStarSystemFromDTO = (dto: StarSystemDTO): StarSystem => {
  const result = {
    modelType: 'StarSystem',
    name: dto.name,
    allObjects: [],
  } as unknown as StarSystem;

  console.log('received system', dto);

  // Build the OrbitalPoints
  dto.all_objects.forEach((orbitalPointDTO: OrbitalPointDTO) => {
    result.allObjects.push(convertOrbitalPointWithoutReferencesFromDTO(orbitalPointDTO));
  });

  // Add references in the OrbitalPoints
  result.allObjects.forEach((orbitalPoint: OrbitalPoint) => {
    const orbitalPointDTO = dto.all_objects.find((op: OrbitalPointDTO) => op.id === orbitalPoint.id);

    orbitalPoint.ownOrbit.primaryBody =
      result.allObjects.find((op: OrbitalPoint) => op.id === orbitalPointDTO?.own_orbit?.primary_body_id) || null;
    orbitalPoint.orbits.forEach((o) => {
      o.primaryBody = result.allObjects.find((op: OrbitalPoint) => op.id === (o.primaryBody as unknown as number)) ?? null;
    });
  });

  // Add references in the StarSystem
  result.center = result.allObjects.find((op: OrbitalPoint) => op.id === dto.center_id) as OrbitalPoint;
  if (!result.center) throw new Error(`Should found an OrbitalPoint with the following id: ${dto.center_id}`);
  result.mainStar = result.allObjects.find((op: OrbitalPoint) => op.id === dto.main_star_id) as Star;
  if (!result.mainStar) throw new Error(`Should found a Star with the following id: ${dto.main_star_id}`);

  // Update depths
  result.allObjects.forEach((orbitalPoint: OrbitalPoint) => updateDepth(orbitalPoint));

  // Sort by depth
  result.allObjects.sort((a: OrbitalPoint, b: OrbitalPoint) => a.depth - b.depth);

  console.log('made system', result);

  return result;
};
