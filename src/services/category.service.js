const { Category } = require('../models');

const createNewCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};
const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};
module.exports = { createNewCategory, getCategories };
