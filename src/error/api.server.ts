import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 500 "Server" error
 */
export class ApiServerError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 500,
    });
  }
}
