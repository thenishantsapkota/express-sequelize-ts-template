import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 401 "Unauthorized" error
 */
export class ApiUnauthorizedError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 401,
    });
  }
}
