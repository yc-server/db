import { patchUpdates } from '../src';

console.log = jest.fn();
console.error = jest.fn();

describe('test patchUpdates', () => {
  it('should update an entity', async () => {
    const entity: any = {};
    patchUpdates(entity, {
      a: 1,
    });
    expect(entity).toMatchObject({
      a: 1,
    });
  });
});