const Anime = require('../models/Anime');

const animes = async (context) => {
  try {
    const animes = await Anime.find({}, null, { limit: 50 });
    return animes;
  } catch (error) {
    return new Error(error);
  }
};

const anime = async ({ title }, context) => {
  try {
    const anime = await Anime.find({
      title: { $regex: new RegExp(`.*${title}.*`), $options: 'i' },
    });
    return anime;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { animes, anime };
