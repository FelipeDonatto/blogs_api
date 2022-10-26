const { User } = require('../models');

const findOneByEmail = (email) => {
  const user = User.findOne({ where: { email } });
  return user;
};

const createNewUser = (displayName, email, password, image) => {
  const validateImg = image === undefined ? null : image;
  const newUser = User.create({ displayName, email, password, validateImg });
  return newUser;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

const getOneById = async (id) => {
  const user = User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return user;
};

module.exports = { findOneByEmail, createNewUser, getAll, getOneById };
