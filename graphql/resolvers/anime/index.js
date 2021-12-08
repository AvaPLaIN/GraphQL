const { animeQueries } = require('./queries');
const { animeMutations } = require('./mutations');

const animeResolvers = [animeQueries, animeMutations];

module.exports = { animeResolvers };
