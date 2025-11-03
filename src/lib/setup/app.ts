import cors from "cors";
import express from "express";

//
import { appRouter } from "#router";
import {
  errorMiddleware,
  loggerMiddleware,
  transactionMiddleware,
} from "#middlewares";
import { ApiResponse } from "#response";

//
import { sequelize } from "#setup/db";

/**
 *
 */
export const app = express();

//
app.use(transactionMiddleware(sequelize));

//
app.use(cors());

//
app.use(express.json({ limit: "50mb" }));

//
app.use(loggerMiddleware);

//
app.get("/", (req, res) => {
  return new ApiResponse(res).addMessage("API is running and healthy").send();
});

//
app.use("/api", appRouter);

//
app.use("*notFound", (_req, res, _next) => {
  return new ApiResponse(res)
    .setStatusCode(404)
    .setSuccess(false)
    .addMessage("API route not found")
    .send();
});

//
app.use(errorMiddleware);
