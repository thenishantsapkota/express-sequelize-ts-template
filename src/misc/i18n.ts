import { AsyncLocalStorage } from "node:async_hooks";

//
import type { TFunction } from "i18next";
import type { NextFunction } from "express";

//
export const i18nStorage = new AsyncLocalStorage();

//
interface useI18nResponse {
  t: TFunction;
}

/**
 *
 */
export function useI18n(): useI18nResponse {
  const response = i18nStorage.getStore() as useI18nResponse;

  return { t: response?.t };
}

/**
 *
 */
export function setI18n(data: useI18nResponse, next: NextFunction) {
  i18nStorage.run(data, () => {
    next();
  });
}
