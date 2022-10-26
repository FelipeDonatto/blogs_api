// const JWT = require('jsonwebtoken');

const { createNewCategory } = require('../services/category.service');

const addCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await createNewCategory(name);
  return res.status(201).json(category);
};

module.exports = { addCategory };