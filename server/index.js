const keys = require('./keys');

// Express app Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup

const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.database,
    password: keys.password,
    port: keys.pgPort
});

pgClient.on('error', () => console.log("Lost PG connection"));

pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)")
.catch((err) => console.log(err));