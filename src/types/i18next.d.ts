import "i18next";
import type { TFunction } from "i18next";

//
import type translation from "../locales/en.json";

/**
 *
 */
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translation;
    };
  }
}

/**
 *
 */
declare global {
  namespace Express {
    export interface Request {
      t: TFunction;
    }
  }
}
