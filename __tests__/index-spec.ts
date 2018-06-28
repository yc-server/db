import * as index from '../src';

test('Should have functions available', () => {
  expect(index.db).toBeTruthy();
  expect(index.paginate).toBeTruthy();
  expect(index.patchUpdates).toBeTruthy();
  expect(index.show).toBeTruthy();
});
