const { postgraphile } = require("postgraphile");
const { Pool } = require('pg')
const winston = require('winston')

const plugins = [
  // require('./plugins/plugin') // ./plugins/plugin/index.js
]
const pgConnectionString = process.env.DB_URI
const pgSchemas = process.env.POSTGRAPH_SCHEMAS.split(',')
const pgOptions = JSON.parse(process.env.POSTGRAPH_OPTIONS)

const pool = new Pool({ connectionString: pgConnectionString })
pool.on('connect', client => {
  client.on('notice', event => {
    winston.info(`[time:${new Date().toISOString()}]${event.message}`)
  })
})

pgOptions.appendPlugins = plugins
pgOptions.pgSettings = pgSettings
pgOptions.additionalGraphQLContextFromRequest = function(req) {

module.exports = app => {
  // setup postgraphile
  app.use(postgraphile(pool, pgSchemas, pgOptions))
};
