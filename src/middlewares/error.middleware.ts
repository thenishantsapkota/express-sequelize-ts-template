import { logger } from "#misc";
import { ApiResponse } from "#response";

//
import type { ApiError } from "#error";
import type { Request, Response, NextFunction } from "express";

/**
 *
 */
export const errorMiddleware = (
  error: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errorStatus = error?.status ?? 500;
  const errorObject = error?.errors ?? undefined;

  //
  logger.error(error.stack ?? error);

  if (error.cause) logger.error("Caused By:", error.cause);

  //
  return new ApiResponse(res)
    .setStatusCode(errorStatus)
    .setSuccess(false)
    .addMessage(error.message)
    .addErrors(errorObject)
    .setErrorCode(error.errorCode)
    .send();
};
