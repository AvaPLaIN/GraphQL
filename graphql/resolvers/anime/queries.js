const Anime = require('../../../models/Anime');

const animeQueries = {
  Query: {
    animes: () => 'animes',
    anime: () => 'anime',
  },
};

module.exports = { animeQueries };
