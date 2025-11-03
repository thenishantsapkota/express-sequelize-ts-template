import { Sequelize } from "sequelize-typescript";

//
import { logger } from "#misc";
import { allModels } from "#models";

//
import { dbConfig } from "#lib/config";

//
const sslOptions = dbConfig.ssl
  ? { ssl: { require: true, rejectUnauthorized: false } }
  : {};

//
export const sequelize = new Sequelize({
  dialect: "mysql",
  host: dbConfig.host,
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  models: allModels,
  dialectOptions: sslOptions,
  logging: dbConfig.logging ? (logs) => logger.info(logs) : false,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});
