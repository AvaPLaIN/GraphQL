const Anime = require('../../../models/Anime');

const animeQueries = {
  Query: {
    animes: async () => {
      try {
        const animes = await Anime.find({}, null, { limit: 50 });
        return animes;
      } catch (error) {
        throw new Error(error);
      }
    },
    anime: () => 'anime',
  },
};

module.exports = { animeQueries };
