import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 409 "Conflict" error
 */
export class ApiConflictError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 409,
    });
  }
}
