const { animeResolvers } = require('./anime/');
const { userResolvers } = require('./user/index');

const resolvers = [animeResolvers, userResolvers];

console.log('graphql/resolvers/index.js-resolvers:', resolvers);

module.exports = { resolvers };
