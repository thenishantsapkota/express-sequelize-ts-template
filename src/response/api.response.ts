import type { Response } from "express";

/**
 * Api response object for consistent response through out the project
 */
export class ApiResponse {
  #res: Response;

  #message?: string;

  #success = true;
  #statusCode = 200;

  #errors?: object;
  #errorCode: string | undefined = undefined;

  #metadata: object | undefined = undefined;
  #paginationData: object | undefined = undefined;

  /**
   * Initiate a new response
   * @param response Express response object
   */
  constructor(response: Response) {
    this.#res = response;
  }

  /**
   * Set status value of the response body
   */
  setSuccess(data: boolean): Omit<ApiResponse, "setSuccess"> {
    this.#success = data;
    return this;
  }

  /**
   * Set status code of the response
   * @param code valid HTTP status code
   */
  setStatusCode(code: number): Omit<ApiResponse, "setStatusCode"> {
    this.#statusCode = code;
    return this;
  }

  /**
   * Add pagination values to response object
   */
  paginate(data: object): Omit<ApiResponse, "paginate"> {
    this.#paginationData = data;
    return this;
  }

  /**
   * Add metadata to response object
   */
  addMetadata(data: object): Omit<ApiResponse, "addMetadata"> {
    this.#metadata = data;
    return this;
  }

  /**
   * Adds response message to response object
   * @param message The message to add in response
   */
  addMessage(message: string): Omit<ApiResponse, "addMessage"> {
    this.#message = message;
    return this;
  }

  /**
   * Add error object; stuffs like validation errors and such
   */
  addErrors(errorObj?: object): Omit<ApiResponse, "addErrors"> {
    this.#errors = errorObj;
    return this;
  }

  /**
   * Set error code for the client to use
   */
  setErrorCode(code?: string): Omit<ApiResponse, "setErrorCode"> {
    this.#errorCode = code;
    return this;
  }

  /**
   * Send the response back to the client
   * @param data The data to send
   */
  send(data?: object) {
    this.#res.status(this.#statusCode).json({
      success: this.#success,
      message: this.#message ?? "API operation successfully executed",
      ...(data ? { data } : {}),
      ...(this.#errors ? { errors: this.#errors } : {}),
      ...(this.#metadata ? { metadata: this.#metadata } : {}),
      ...(this.#errorCode ? { errorCode: this.#errorCode } : {}),
      ...(this.#paginationData ? { pagination: this.#paginationData } : {}),
    });
  }
}
