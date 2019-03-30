//import knex  & use it to generate an instance of it to configure out database

const knex = require("knex");

const knexConfig = require("../knexfile.js");

module.exports = knex(knexConfig.development);
