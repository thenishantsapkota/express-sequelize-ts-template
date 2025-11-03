import type { AppConfig, DatabaseConfig } from "#types";

//
const runMode = process.env.NODE_ENV ?? "development";

/**
 *
 */
export const appConfig: AppConfig = {
  port: Number.parseInt(process.env.PORT ?? "3000", 10),
  nodeEnv: runMode,
  isDevMode: ["development", "local"].includes(runMode),
};

/**
 *
 */
export const dbConfig: DatabaseConfig = {
  host: process.env.DB_HOST ?? "",
  username: process.env.DB_USERNAME ?? "",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_DATABASE ?? "",
  ssl: !!Number.parseInt(process.env.DB_SSL ?? "0", 10),
  logging: !!Number.parseInt(process.env.DB_LOGGING ?? "0", 10),
};
