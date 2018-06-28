import { Document, model, PaginateModel, SchemaTypes } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
import { IModelOptions } from './IModelOptions';

/**
 * Creating a Ycs model
 * @param options {IModelOptions} Model options
 */
export function db(options: IModelOptions): PaginateModel<Document> {
  options.schema.add({
    __auth: {
      ref: '__auths',
      required: !!options.auth,
      type: SchemaTypes.ObjectId,
    },
  });
  options.schema.plugin(mongoosePaginate);
  return model(
    options.name,
    options.schema,
    options.collection,
    options.skipInit
  );
}






