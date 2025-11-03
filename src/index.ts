"use strict";

//
import "dotenv/config";
import "reflect-metadata";

//
import { app, sequelize, appConfig } from "#lib";
import { logger } from "#misc";

/**
 *
 */
async function main() {
  try {
    app.listen(appConfig.port, () => {
      logger.info(
        `App is up and running at http://localhost:${appConfig.port}`,
      );
    });
  } catch (error) {
    logger.info("Unable to start the express app");
    logger.error(error);
  }

  try {
    await sequelize.authenticate();
    logger.info("Database connection is successful");
  } catch (error) {
    logger.error("Unable to connect to the database");
    logger.error(error);
  }
}

//
main();
