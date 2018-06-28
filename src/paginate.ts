import { Boom } from '@ycs/error';
import { IContext } from '@ycs/interfaces';
import * as _ from 'lodash';
import { Document, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';

/**
 * Paginating docs
 * @param model {PaginateModel<Document>} Ysc model or mongoose PaginateModel
 * @param ctx {IContext} Ycs context
 * @param filters {object} Custom filters
 * @param options {PaginateOptions} Custom options. See {@link https://github.com/edwardhotchkiss/mongoose-paginate}
 */
export async function paginate(
  model: PaginateModel<Document>,
  ctx: IContext,
  filters?: { [x: string]: any },
  options?: PaginateOptions
): Promise<PaginateResult<Document>> {
  let _filters = {};
  let _options: PaginateOptions = {};

  if (filters) {
    _filters = _.merge(_filters, filters);
  }

  if (options) {
    _options = _.merge(_options, options);
  }

  if (ctx.request.query._filters) {
    try {
      const reqFilters = JSON.parse(ctx.request.query._filters);
      _filters = _.merge(_filters, reqFilters);
    } catch (e) {
      throw Boom.boomify(e, { statusCode: 422 });
    }
  }

  if (ctx.request.query._options) {
    try {
      const reqOptions = JSON.parse(ctx.request.query._options);
      _options = _.merge(_options, reqOptions);
    } catch (e) {
      throw Boom.boomify(e, { statusCode: 422 });
    }
  }

  return await model.paginate(_filters, _options);
}