/**
 * Modifying an entity
 * @param entity {Document} The old entity
 * @param updates {any} Fields to change
 */
export function patchUpdates(entity: any, updates: any): any {
  for (const key of Object.keys(updates)) {
    entity[key] = updates[key];
  }
  return entity;
}
