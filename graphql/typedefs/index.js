const { animeType } = require('./types/anime');
const { userType } = require('./types/user');
const { query } = require('./query');

const typeDefs = [query, userType, animeType];

module.exports = { typeDefs };
