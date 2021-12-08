const { query } = require('./query');
const { types } = require('./types/index');

const typeDefs = [query, types];

module.exports = {
  typeDefs,
};
