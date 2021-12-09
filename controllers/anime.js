const Anime = require('../models/Anime');

const animes = async (context) => {
  console.log('animes here', context);
  //   try {
  //     const animes = await Anime.find({}, null, { limit: 50 });
  //     return animes;
  //   } catch (error) {
  //     return new Error(error);
  //   }
};

module.exports = { animes };
