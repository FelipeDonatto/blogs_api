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

module.exports = { findOneByEmail, createNewUser };
