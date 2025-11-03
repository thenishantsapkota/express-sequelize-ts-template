import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 403 "Forbidden" error
 */
export class ApiForbiddenError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 403,
    });
  }
}
