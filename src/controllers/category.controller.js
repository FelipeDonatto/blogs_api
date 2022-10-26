// const JWT = require('jsonwebtoken');

const {
  createNewCategory,
  getCategories,
} = require('../services/category.service');

const addCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await createNewCategory(name);
  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const all = await getCategories();
  return res.status(200).json(all);
};

module.exports = { addCategory, getAllCategories };
