// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

//
const configVariables = {
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    seederStorage: "sequelize",
};

//
module.exports = {
    test: configVariables,
    production: configVariables,
    development: configVariables,
};
