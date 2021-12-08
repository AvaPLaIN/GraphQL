const { animeResolvers } = require('./anime/index');
const { userResolvers } = require('./user/index');

const resolvers = [animeResolvers, userResolvers];

module.exports = {
  resolvers,
};
