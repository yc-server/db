import { ConnectionOptions } from 'mongoose';

export interface IConfig {
  /**
   * mongoose uri
   */
  uri: string;

  /**
   * mongoose connection options
   */
  options: ConnectionOptions;

  /**
   * mongoose promise
   */
  promise: any;
}