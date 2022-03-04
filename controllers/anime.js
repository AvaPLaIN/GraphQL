const Anime = require("../models/Anime");

const PAGINATION_ITEMS = 50;

const animes = async ({ page, genres, status, released, type }, context) => {
  const filterOptions = {};
  if (genres) filterOptions.genres = { $all: genres };
  if (status) filterOptions.status = status;
  if (released) filterOptions.released = released;
  if (type) filterOptions.type = type;

  try {
    const animes = await Anime.find(filterOptions, null, {
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
      title: { $regex: new RegExp(`.*${title}.*`), $options: "i" },
    });
    return anime;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { animes, anime };
