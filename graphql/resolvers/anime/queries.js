//* IMPORTS
//     * CONTROLLERS
const { animes } = require('../../../controllers/anime');

//     * MIDDLEWARE
const { authMiddleware } = require('../../../middleware/authentication');

const animeQueries = {
  Query: {
    animes: async (parent, args, context, info) =>
      (await authMiddleware(context)) ? await animes(context) : [],
    anime: () => 'anime',
  },
};

module.exports = { animeQueries };
