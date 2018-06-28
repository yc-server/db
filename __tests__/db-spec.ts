import { db, Schema } from '../src';

console.log = jest.fn();
console.error = jest.fn();

describe('test db', () => {
  it('should create a model', async () => {
    const model = db({
      auth: true,
      name: 'test',
      schema: new Schema({
        name: String,
        info: String,
      }),
    });
    expect(model.schema.path('name')).toBeTruthy();
    expect(model.schema.path('info')).toBeTruthy();
  });
});
