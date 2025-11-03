import { ApiError } from "./api.error";

//
import type { IErrorOptions } from "./api.error";

/**
 * 422 "Unprocessable content" error
 */
export class ApiValidationError extends ApiError {
  constructor(message: string, options?: IErrorOptions) {
    super(message, {
      ...options,
      status: 422,
    });
  }
}
