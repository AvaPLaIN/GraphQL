//* IMPORTS
//     * CONFIG
require('dotenv').config({ path: './config.env' });
const connectDB = require('./config/database');

//     * SERVER
const server = require('./graphql/index');

//     * GRAPHQL

//     * MODELS

//     * MIDDLEWARE

//     * LIBRARIES

connectDB();
const PORT = process.env.PORT || 8800;

server
  .listen({ port: PORT })
  .then((res) => console.log(`Server running at ${res.url}`));
