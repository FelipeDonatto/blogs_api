const { Category, BlogPost, User } = require('../models');

const createNewCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};
const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};
const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

module.exports = { createNewCategory, getCategories, getPosts };
