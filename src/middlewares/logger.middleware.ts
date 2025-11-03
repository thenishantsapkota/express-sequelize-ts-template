import morgan from "morgan";

//
import { logger } from "#misc";

//
import type { Request, Response, NextFunction } from "express";

/**
 *
 */
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const originalSend = res.send;

  res.send = function (data) {
    const httpMorgan = morgan("short", {
      stream: {
        write: (message: string) => logger.http(message.replace("\n", "")),
      },
    });

    httpMorgan(req, res, () => null);

    originalSend.call(this, data);

    return res;
  };

  next();
};
