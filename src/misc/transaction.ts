import { AsyncLocalStorage } from "node:async_hooks";

//
import type { NextFunction } from "express";
import type { Transaction } from "sequelize";

//
export const transactionStorage = new AsyncLocalStorage();

//
interface useTransactionResponse {
  transaction: Transaction;
}

/**
 *
 */
export function useTransaction(): useTransactionResponse {
  const response = transactionStorage.getStore() as useTransactionResponse;

  return { transaction: response?.transaction };
}

/**
 *
 */
export function setTransaction(
  data: useTransactionResponse,
  next: NextFunction,
) {
  transactionStorage.run(data, () => {
    next();
  });
}
