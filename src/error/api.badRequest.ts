import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 400 "Bad Request" error
 */
export class ApiBadRequestError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 400,
    });
  }
}
