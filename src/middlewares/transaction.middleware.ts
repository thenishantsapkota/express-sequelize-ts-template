import { setTransaction } from "../misc";

//
import type { Sequelize } from "sequelize-typescript";
import type { NextFunction, Request, Response } from "express";

/**
 *
 */
export const transactionMiddleware =
  (sequelize: Sequelize) =>
  async (_req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();

    //
    setTransaction({ transaction }, next);
    //

    async function handleTransaction(forceRollback?: boolean) {
      const transactionStatus = (transaction as any).finished;
      if (["commit", "rollback"].includes(transactionStatus)) return;

      //
      if (forceRollback) {
        await transaction.rollback();
        return;
      }

      //
      if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
        await transaction.commit();
      } else {
        await transaction.rollback();
      }
    }

    //
    res.on("finish", () => handleTransaction());
    res.on("error", () => handleTransaction(true));
    res.on("close", () => handleTransaction(true));
  };
