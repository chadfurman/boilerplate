const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// Security HTTP headers
// See https://helmetjs.github.io/docs/
app.use(helmet());

// CORS headers
app.use(cors());

// Healthcheck
require('./routes/healthz')(app);

// Robots.txt
require('./routes/robots')(app);

// Postgraphile: GraphQL API
require('./postgraphile')(app);

module.exports = app;
