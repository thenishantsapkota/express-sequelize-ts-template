export interface IErrorOptions extends ErrorOptions {
  errors?: object;
}

/**
 * Custom error class with customized features
 */
export class ApiError extends Error {
  public status?: number;
  public errors?: object;
  public errorCode?: string;

  /**
   *
   */
  constructor(message: string, options?: IErrorOptions & { status: number }) {
    super(message, options);

    //
    this.status = options?.status ?? 500;
    this.errors = options?.errors ?? undefined;
  }

  /**
   * Add error object; stuffs like validation errors and such
   */
  addErrors(errorObj: object): Omit<ApiError, "addErrors"> {
    this.errors = errorObj;
    return this;
  }

  /**
   * Set error code for the client to use
   */
  setErrorCode(code?: string): Omit<ApiError, "setErrorCode"> {
    this.errorCode = code;
    return this;
  }
}
