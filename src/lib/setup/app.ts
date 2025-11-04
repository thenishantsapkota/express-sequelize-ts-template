import cors from "cors";
import i18next from "i18next";
import express from "express";
import Backend from "i18next-fs-backend";
import { LanguageDetector, handle } from "i18next-http-middleware";

//
import { appRouter } from "#router";
import {
  errorMiddleware,
  loggerMiddleware,
  transactionMiddleware,
  i18nMiddleware,
} from "#middlewares";
import { ApiResponse } from "#response";

//
import { sequelize } from "#setup/db";

/**
 *
 */
export const app = express();

//
i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    preload: ["en"],
    backend: {
      loadPath: "./src/locales/{{lng}}.json",
    },
  });

//
app.use(handle(i18next));

//
app.use(i18nMiddleware);

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
  return new ApiResponse(res).addMessage(req.t("healthCheck")).send();
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
