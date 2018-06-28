import { Boom } from '@ycs/error';
import { IContext } from '@ycs/interfaces';
import * as _ from 'lodash';
import { Document, PaginateModel, PaginateOptions } from 'mongoose';

/**
 * Showing a doc with an id form ctx.params.id
 * @param model {PaginateModel<Document>} Ysc model or mongoose PaginateModel
 * @param ctx {IContext} Ycs context
 * @param options {PaginateOptions} Custom options. Only select and populate making effects.
 */
export async function show(
  model: PaginateModel<Document>,
  ctx: IContext,
  options?: PaginateOptions
): Promise<Document | null> {
  let _options: PaginateOptions = {};

  if (options) {
    _options = _.merge(_options, options);
  }

  if (ctx.request.query._options) {
    try {
      const reqOptions = JSON.parse(ctx.request.query._options);
      _options = _.merge(_options, reqOptions);
    } catch (e) {
      throw Boom.boomify(e, { statusCode: 422 });
    }
  }

  let query = model.findById(ctx.params.id);
  if (_options.select) query = query.select(_options.select);
  if (_options.populate) query = query.populate(_options.populate);

  return await query.exec();
}
