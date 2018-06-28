import { Schema } from 'mongoose';

/**
 * Model options
 */
export interface IModelOptions {
  /**
   * Wheather the document need be authenticated.
   */
  auth?: boolean;

  /**
   * Same as mongoose model collection
   */
  collection?: string;

  /**
   * Same as mongoose model name
   */
  name: string;

  /**
   * Same as mongoose schema
   */
  schema: Schema;

  /**
   * Same as mongoose model skipInit
   */
  skipInit?: boolean;
}
