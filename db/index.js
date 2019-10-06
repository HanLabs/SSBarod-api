const Sequelize = require('sequelize');

const models = require('./model');

const {
  SS_DATABASE,
  SS_DB_USERNAME,
  SS_DB_PASSWORD,
  SS_DB_HOST,
  SS_DB_PORT,
  SS_DB_DIALECT,
  SS_DB_LOGGING
} = process.env;

module.exports = models({
  sequelize: new Sequelize(SS_DATABASE, SS_DB_USERNAME, SS_DB_PASSWORD, {
    host: SS_DB_HOST,
    port: SS_DB_PORT,
    dialect: SS_DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: Boolean(SS_DB_LOGGING)
  })
}, Sequelize);