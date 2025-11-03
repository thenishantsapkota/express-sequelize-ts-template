import { setI18n } from "#misc";

//
import type { Request, Response, NextFunction } from "express";

/**
 *
 */
export const i18nMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  setI18n({ t: req.t }, next);
};
