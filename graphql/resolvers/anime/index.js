const { animeQueries } = require('./queries');
const { animeMutations } = require('./mutations');

const animeResolvers = [animeQueries, animeMutations];
console.log('graphql/resolvers/anime/index.js-resolvers:', animeResolvers);

module.exports = { animeResolvers };
