const { animeResolvers } = require('./anime/');
const { userResolvers } = require('./user/index');

const resolvers = [animeResolvers, userResolvers];

module.exports = { resolvers };
