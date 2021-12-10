//* IMPORTS
//     * CONTROLLERS
const { animes, anime } = require('../../../controllers/anime');

//     * MIDDLEWARE
const { authMiddleware } = require('../../../middleware/authentication');

const animeQueries = {
  Query: {
    animes: async (_, __, context) => await authMiddleware(context, animes),

    anime: async (_, args, context) => await anime(args, context),
  },
};

module.exports = { animeQueries };
