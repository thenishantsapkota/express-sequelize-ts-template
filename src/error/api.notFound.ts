import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 404 "Not Found" error
 */
export class ApiNotFoundError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 404,
    });
  }
}
