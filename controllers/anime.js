const Anime = require('../models/Anime');

const PAGINATION_ITEMS = 50;

const animes = async ({ page }, context) => {
  try {
    const animes = await Anime.find({}, null, {
      limit: PAGINATION_ITEMS,
      skip: page * PAGINATION_ITEMS,
    });
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
